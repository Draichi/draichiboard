<script setup lang="ts"></script>

<template>
  <div :class="$style.container">
    <canvas id="web-gl" :style="$style.container__canvas"></canvas>
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
