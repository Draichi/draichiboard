<template>
  <div id="about" :class="$style.container">
    <h3 :class="$style.title">About</h3>
    <p :class="$style.text">
      I'm a <span itemprop="jobTitle">software engineer</span> since 2015,
      <span itemprop="jobTitle">front-end developer</span> and
      <span itemprop="jobTitle">web designer</span>. Focused in
      <span itemprop="knowsAbout">performance</span>,
      <span itemprop="knowsAbout">user experience</span> and
      <span itemprop="knowsAbout">SEO</span>.
    </p>
  </div>
</template>

<style module>
.container {
  background-color: #b9bfc1;
  border-radius: 20px;
  padding: 23px;
  grid-area: about;
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
