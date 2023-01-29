<script setup lang="ts">
const props = defineProps({
  backgroundColor: { type: String, default: '#5AE389' },
  color: { type: String, default: '#122117' },
  titleColor: { type: String, default: null },
  title: { type: String, default: '' },
})

const styleObject = {
  'background-color': props.backgroundColor,
  color: props.color,
}

const titleStyleObject = {
  color: props.titleColor || props.color,
}
</script>

<template>
  <div :class="$style.container" :style="styleObject">
    <p :class="$style.title" :style="titleStyleObject">
      {{ title }}
    </p>
    <h3 :class="$style.text">
      <slot />
      <span :class="$style.icon">
        <slot name="icon" />
      </span>
    </h3>
  </div>
</template>

<style module>
.container {
  width: 100%;
  height: 146px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px 15px;
  font-weight: 500;
  cursor: pointer;
}

.title {
  font-size: 1.25rem;
}

.text {
  width: 100%;
  display: flex;
  font-size: 3.125rem;
  align-items: center;
}

.icon {
  margin-left: 1.5rem;
}
</style>
