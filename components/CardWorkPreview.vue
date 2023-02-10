<script setup lang="ts">
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import GUI from 'lil-gui'
import laptopModelPath from '@/src/macbook-3d-model.glb'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Work } from '~~/types'

ScrollTrigger.defaults({
  immediateRender: false,
  scrub: true,
})

const props = defineProps<{
  workHighlighted: Work
}>()

// const currentVideoTexture = ref<THREE.VideoTexture | null>(null)

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // const gui = new GUI()

  const canvas = document.getElementById('webgl-renderer') as HTMLCanvasElement

  const sizes = {
    width: canvas.getBoundingClientRect().width,
    height: canvas.getBoundingClientRect().height,
  }

  const scene = new THREE.Scene()

  const fov = 35
  const aspect = sizes.width / sizes.height
  const near = 0.1
  const far = 1000

  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)

  camera.position.set(0, -0.6, 0)

  const controls = new OrbitControls(camera, canvas)

  controls.enableDamping = true
  controls.dampingFactor = 0.02

  const gltfLoader = new GLTFLoader()

  gltfLoader.load(laptopModelPath, ({ scene: modelScene }) => {
    modelScene.traverse((child: any) => {
      if (child.isMesh && child.name === 'Display') {
        watchEffect(() => {
          const ibmVideo = document.getElementById(
            `${props.workHighlighted}-video`
          ) as HTMLVideoElement

          ibmVideo.play()
          ibmVideo.loop = true

          const ibmVideoTexture = new THREE.VideoTexture(ibmVideo)

          ibmVideoTexture.center.set(0.5, 0.5)
          ibmVideoTexture.rotation = (3 * Math.PI) / 2

          const API = {
            offsetX: -0.38,
            offsetY: 0.018,
            repeatX: 2.94,
            repeatY: 2.76,
            rotation: (3 * Math.PI) / 2,
            centerX: 0.5,
            centerY: 0.5,
          }

          function updateUvTransform(texture: any) {
            if (texture.matrixAutoUpdate === true) {
              texture.offset.set(API.offsetX, API.offsetY)
              texture.repeat.set(API.repeatX, API.repeatY)
              texture.center.set(API.centerX, API.centerY)
              texture.rotation = API.rotation // rotation is around [ 0.5, 0.5 ]
            }
          }

          // gui
          //   .add(API, 'offsetX', -3, 3)
          //   .name('offset.x')
          //   .onChange(() => updateUvTransform(currentVideoTexture))
          // gui
          //   .add(API, 'offsetY', -3, 3)
          //   .name('offset.y')
          //   .onChange(() => updateUvTransform(currentVideoTexture))
          // gui
          //   .add(API, 'repeatX', -3, 3)
          //   .name('repeat.x')
          //   .onChange(() => updateUvTransform(currentVideoTexture))
          // gui
          //   .add(API, 'repeatY', -3, 3)
          //   .name('repeat.y')
          //   .onChange(() => updateUvTransform(currentVideoTexture))
          // gui
          //   .add(API, 'rotation', -3, 3)
          //   .name('rotation')
          //   .onChange(() => updateUvTransform(currentVideoTexture))
          // gui
          //   .add(API, 'centerX', -3, 3)
          //   .name('center.x')
          //   .onChange(() => updateUvTransform(currentVideoTexture))
          // gui
          //   .add(API, 'centerY', -3, 3)
          //   .name('center.y')
          //   .onChange(() => updateUvTransform(currentVideoTexture))

          updateUvTransform(ibmVideoTexture)

          child.material = new THREE.MeshBasicMaterial({
            map: ibmVideoTexture,
            side: THREE.DoubleSide,
          })
        })
      }

      modelScene.position.z = -0.05

      scene.add(modelScene)
      camera.lookAt(modelScene.position)

      const rotationAnimation = gsap.fromTo(
        modelScene.rotation,
        {
          z: Math.PI - Math.PI / 6,
        },
        {
          z: Math.PI - -Math.PI / 6,
          yoyo: true,
          repeat: -1,
          duration: 10,
          ease: 'Power1.easeInOut',
        }
      )

      const worksListItems = document.querySelectorAll('#works-list > li')

      worksListItems.forEach((item) => {
        item.addEventListener('click', () => {
          rotationAnimation.pause()
          gsap.to(modelScene.rotation, {
            z: Math.PI,
          })
          gsap.to(modelScene.position, {
            y: -0.2,
          })
        })

        item.addEventListener('contextmenu', () => {
          gsap.to(modelScene.position, {
            y: 0,
          })
          // gsap.to(modelScene.rotation, {
          //   z: Math.PI - Math.PI / 6,
          // })
          rotationAnimation.restart()
        })
      })
    })

    // const planeAspect = 29 / 19.5
    // const imageAspect = 1360 / 878
    // const aspect = imageAspect / planeAspect

    // ibmVideoTexture.wrapS = THREE.RepeatWrapping
    // ibmVideoTexture.wrapT = THREE.RepeatWrapping
  })

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    canvas,
  })

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  const light = new THREE.DirectionalLight('#fff', 1)

  light.position.set(0, -2, 0)

  scene.add(light)

  function tick() {
    controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(tick)
  }

  tick()
})
</script>

<template>
  <div id="laptop-3d" :class="$style['laptop3d-container']">
    <div :class="$style.container">
      <canvas id="webgl-renderer" :class="$style.container__canvas"></canvas>
      <p :class="$style.text">drag to orbit {{ props.workHighlighted }}</p>
    </div>
  </div>
</template>

<style module>
.laptop3d-container {
  background-color: #0b0f0f;
  padding-top: 8px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 99;
}
.container {
  background: #e3d45a;
  border-radius: 15px;
  height: 230px;
  position: relative;
}

.text {
  color: #242314;
  font-weight: 400;
  font-size: 10px;
  position: absolute;
  bottom: 8px;
  right: 15px;
}

.container__canvas {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
