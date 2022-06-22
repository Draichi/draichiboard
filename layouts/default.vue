<template>
  <div>
    <Navbar/>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navbar from '@/components/UI/Navbar.vue'

@Component({
  components: {
    Navbar,
  }
})
export default class DefaultLayout extends Vue {}
</script>

<style>
:root {
  font-size: 16px;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  --text-primary: #383737;
  --text-secondary: #ececec;
  --bg-primary: #11111a;
  --bg-secondary: rgb(31, 33, 49);
  --transition-speed: 600ms;
}

html {
  background: var(--bg-primary);
  
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body::-webkit-scrollbar {
  width: 0.25rem;
}

body::-webkit-scrollbar-track {
  background: rgb(31, 33, 49);
}

body::-webkit-scrollbar-thumb {
  background: #3b8070;
}

main {
  margin-left: 5rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

@media (max-width: 640px) {
  main {
    margin: 0;
  }
}
</style>
