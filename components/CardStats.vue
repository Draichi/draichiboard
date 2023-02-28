<script setup lang="ts">
const props = defineProps<{
  title: string
  value: number
  helpMessage?: string
  backgroundColor: string
  textColor: string
}>()
</script>

<template>
  <section
    :class="$style.container"
    :style="{ backgroundColor: props.backgroundColor, color: props.textColor }"
  >
    <div>
      <div :class="$style['svg-container']">
        <svg
          fill="none"
          height="12"
          viewBox="0 0 12 12"
          width="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.4 9.6H6.6V8.4H5.4V9.6ZM6 0C5.21207 0 4.43185 0.155195 3.7039 0.456723C2.97595 0.758251 2.31451 1.20021 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.31451 10.7998 2.97595 11.2417 3.7039 11.5433C4.43185 11.8448 5.21207 12 6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 5.21207 11.8448 4.43185 11.5433 3.7039C11.2417 2.97595 10.7998 2.31451 10.2426 1.75736C9.68549 1.20021 9.02405 0.758251 8.2961 0.456723C7.56815 0.155195 6.78793 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM6 2.4C5.36348 2.4 4.75303 2.65286 4.30294 3.10294C3.85286 3.55303 3.6 4.16348 3.6 4.8H4.8C4.8 4.48174 4.92643 4.17652 5.15147 3.95147C5.37652 3.72643 5.68174 3.6 6 3.6C6.31826 3.6 6.62348 3.72643 6.84853 3.95147C7.07357 4.17652 7.2 4.48174 7.2 4.8C7.2 6 5.4 5.85 5.4 7.8H6.6C6.6 6.45 8.4 6.3 8.4 4.8C8.4 4.16348 8.14714 3.55303 7.69706 3.10294C7.24697 2.65286 6.63652 2.4 6 2.4Z"
            :fill="props.textColor"
          />
        </svg>
      </div>
      <div :class="$style['graph-container']">
        <slot name="graph" />
      </div>
    </div>
    <div :class="$style['title-value-container']">
      <h4 :class="$style.title">{{ props.title }}</h4>
      <p :class="$style.value">{{ props.value }}</p>
    </div>
  </section>
</template>

<style module>
.container {
  height: 157px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
}

.svg-container {
  display: flex;
  justify-content: flex-end;
  padding: 0.75rem 0.75rem 0 0;
}

.graph-container {
  max-height: 52px;
  width: 100%;
  position: relative;
}

.title-value-container {
  padding: 0.5rem;
}

.title {
  font-weight: 500;
  font-size: 10px;
  line-height: 121%;
  letter-spacing: -0.05em;
}

.value {
  font-weight: 500;
  font-size: 37px;
  line-height: 56px;
  letter-spacing: -0.05em;
}
</style>
