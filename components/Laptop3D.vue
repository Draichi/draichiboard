<script setup lang="ts">
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import foo from '@/src/3d-models/laptop/scene.gltf'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

ScrollTrigger.defaults({
  immediateRender: false,
  scrub: true,
})

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
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

  camera.position.set(0, -1.5, 0)

  const gltfLoader = new GLTFLoader()

  gltfLoader.load(foo, ({ scene: modelScene }) => {
    modelScene.name = 'laptop_computer_low_poly'
    modelScene.position.set(0.03, 0, 0.06)
    modelScene.rotation.x = -Math.PI / 2.6
    modelScene.rotation.y = -Math.PI / 5.5
    modelScene.rotation.z = Math.PI / 6
    scene.add(modelScene)
    camera.lookAt(modelScene.position)

    function onEnter() {
      gsap.to(modelScene.rotation, {
        x: -Math.PI / 4,
        y: -Math.PI / 4,
        z: Math.PI / 4,
      })
      camera.lookAt(modelScene.position)
    }

    function onEnterBack() {
      gsap.to(modelScene.rotation, {
        x: -Math.PI / 4,
        y: Math.PI / 2,
        z: -Math.PI / 4,
      })
      camera.lookAt(modelScene.position)
    }

    function useScrollTriggerAnimation(trigger: string) {
      gsap.timeline({
        scrollTrigger: {
          trigger,
          start: 'top 80%',
          end: 'bottom 80%',
          onEnter: onEnter,
          onEnterBack: onEnterBack,
        },
      })
    }

    useScrollTriggerAnimation('#ibm')
    useScrollTriggerAnimation('#sabido')
    useScrollTriggerAnimation('#globo')

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
          y: -1,
        })
      })

      item.addEventListener('contextmenu', () => {
        gsap.to(modelScene.position, {
          y: 0,
        })
        gsap.to(modelScene.rotation, {
          z: Math.PI - Math.PI / 6,
        })
        rotationAnimation.restart()
      })
    })
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
}

.container__canvas {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
