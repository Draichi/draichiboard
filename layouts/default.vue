<template>
  <NuxtPage />
</template>

<style>
:root {
  background-color: #0b0f0f;
  color: #919f96;
  font-family: 'Poppins', system-ui, sans-serif;
  font-size: 16px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

button {
  border: none;
}

a {
  text-decoration: none;
  color: inherit;
}

a.router-link-active {
  color: #4fd1c5;
}

a.router-link-active svg path {
  fill: #4fd1c5 !important;
}
</style>
