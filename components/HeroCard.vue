<template>
  <div :class="$style['hero-card']">
    <h1 :class="$style['hero-card__text']">Lucas Draichi</h1>
  </div>
</template>

<style module>
.hero-card {
  background-color: #111518;
  border-radius: 20px;
  padding: 1.625rem 0;
}

.hero-card__text {
  color: #36a2eb;
  text-align: center;
  font-family: fantasy;
}
</style>
