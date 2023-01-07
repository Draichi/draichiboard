<script setup lang="ts">
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import foo from '@/src/3d-models/laptop/scene.gltf'

onMounted(() => {
  const canvas = document.getElementById('webgl-renderer') as HTMLCanvasElement

  const sizes = {
    width: canvas.getBoundingClientRect().width,
    height: canvas.getBoundingClientRect().height,
  }

  const scene = new THREE.Scene()

  const fov = 35
  const aspect = sizes.width / sizes.height
  const near = 0.9
  const far = 1000

  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)

  const gltfLoader = new GLTFLoader()

  gltfLoader.load(foo, ({ scene: modelScene }) => {
    modelScene.name = 'laptop_computer_low_poly'
    // modelScene.scale.set(2, 2, 2)
    modelScene.position.set(0, 2, 0)
    modelScene.rotation.x = 2
    scene.add(modelScene)
    camera.lookAt(modelScene.position)
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
  <div :class="$style.container">
    <canvas id="webgl-renderer" :style="$style.container__canvas"></canvas>
  </div>
</template>

<style module>
.container {
  background: #e3d45a;
  border-radius: 15px;
  width: 100%;
  height: 230px;
}

.container__canvas {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
