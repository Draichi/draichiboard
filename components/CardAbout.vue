<template>
  <div id="about" :class="$style.container">
    <h3 :class="$style.title">About</h3>
    <p :class="$style.text">
      I'm a software engineer since 2015, front-end developer and web designer.
      Focused in performance, user experience and SEO.
    </p>
  </div>
</template>

<style module>
.container {
  background-color: #b9bfc1;
  border-radius: 20px;
  padding: 23px;
}

.title {
  font-weight: 500;
  font-size: 20px;
  color: #1d1d1d;
}

.text {
  color: #363425;

  font-weight: 500;
  font-size: 22px;
  line-height: 33px;
  text-transform: uppercase;
  margin-top: 25px;
}
</style>
