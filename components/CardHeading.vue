<template>
  <div id="lucas-draichi" :class="$style['hero-card']">
    <h1 :class="$style['hero-card__text']" itemprop="name">Lucas Draichi</h1>
  </div>
</template>

<style module>
.hero-card {
  background-color: #111518;
  border-radius: 20px;
  padding: 2.5rem 0;
  margin-top: calc(100vh - 230px);
  grid-area: heading;
}

.hero-card__text {
  color: #36a2eb;
  text-align: center;
  font-family: 'Lacquer', fantasy;
  letter-spacing: -0.045em;
}

@media (min-width: 600px) {
  .hero-card {
    margin-top: 0;
  }
}
</style>
