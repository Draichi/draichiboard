<template>
  <div>
    <div>
      <h3>IBM</h3>
      <button @click="$emit('close-button:click')">X</button>
    </div>
    <slot />
  </div>
</template>

<style module>
.container {
  background-color: #181711;
  color: #ebeae6;
  border-radius: 20px;
}
</style>
