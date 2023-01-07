<script setup lang="ts">
const props = defineProps({
  backgroundColor: { type: String, default: '#5AE389' },
  color: { type: String, default: '#122117' },
  title: { type: String, default: '' },
})

const styleObject = {
  'background-color': props.backgroundColor,
  color: props.color,
}
</script>

<template>
  <div :class="$style.tile" :style="styleObject">
    <p>
      {{ title }}
    </p>
    <div>
      <h3 :class="$style.tile__content">
        <slot />
        <span :class="$style.tile__icon">
          <slot name="icon" />
        </span>
      </h3>
    </div>
  </div>
</template>

<style module>
.tile {
  width: 100%;
  height: 146px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px 29px;
}

.tile__content {
  font-size: 3.125rem;
}

.tile__icon {
  margin-left: 30px;
}
</style>
