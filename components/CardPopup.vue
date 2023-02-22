<script setup lang="ts">
const emit = defineEmits(['close-button:click'])

function onButtonClick() {
  emit('close-button:click')
}
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.header">
      <h3 :class="$style.title">
        <slot name="title" />
      </h3>
      <button
        id="popup-close-button"
        :class="$style.button"
        @click="onButtonClick"
      >
        <svg
          fill="none"
          height="16"
          viewBox="0 0 16 16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.6 16L0 14.4L6.4 8L0 1.6L1.6 0L8 6.4L14.4 0L16 1.6L9.6 8L16 14.4L14.4 16L8 9.6L1.6 16Z"
            fill="#EBEAE6"
          />
        </svg>
      </button>
    </div>
    <div :class="$style.text">
      <slot name="description" />
    </div>
  </div>
</template>

<style module>
.container {
  position: fixed;
  top: 238px;
  left: 8px;
  height: calc(100vh - 238px);
  right: 8px;
  z-index: 99;
  background-color: #181711;
  color: #ebeae6;
  border-radius: 20px;
  padding: 1.5rem;
  overflow-y: scroll;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  color: #ebeae6;
  font-size: 2.75rem;
  font-weight: 400;
}

.text {
  font-weight: 400;
  font-size: 18px;
}

.button {
  background-color: #181711;
  cursor: pointer;
  padding: 0.5rem;
}

@media (min-width: 600px) {
  .container {
    width: calc(50vw - 4px);
    height: 100vh;
    top: 0;
    left: 0;
  }

  .title {
    font-size: 3.75rem;
  }

  .text {
    font-size: 1.3125rem;
    line-height: 168%;
  }
}
</style>
