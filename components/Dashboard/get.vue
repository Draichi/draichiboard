<template>
  <section class="container">
    <div>
      <h1 class="title">web-worker</h1>
      <h2 class="subtitle">Nuxt.js project</h2>
      <p>{{ notification }}</p>
      <ul class="list">
        <li>Number of Web Workers: {{ workers.length }}</li>
        <li>Number of long Running Workers: {{ longRunningWorkers.length }}</li>
        <li>Number of unused Workers: {{ workers.filter(w => !w.inUse).length }}</li>
      </ul>
      <div class="links">
        <a v-if="!needWorkerSetup" v-on:click="test" class="button button--green">Test Worker</a>
        <a
          v-on:click="long(2000)"
          class="button button--green"
        >Execute long running Worker</a>
        <a
          v-if="!needWorkerSetup && longRunningWorkers.length"
          v-on:click="freeWorker"
          class="button button--green"
        >Free long running Worker</a>
        <a v-on:click="removeWorker" class="button button--grey">Remove Web Worker</a>
        <a v-on:click="createWorkers" class="button button--grey">Create more Workers</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
function longRunningListener(event: any) {
  console.log(`expensive made ${event.data} loops`)
}
@Component
export default class getData extends Vue {
  workers: any[] = []
  worker: any
  notification = ''
  longRunningWorkers: any[] = []
  longIndex = 0
  // $worker: any
  async mounted() {
    const t: any = this
    this.worker = t.$worker.createWorker()
    // const lucas = await this.worker.listen()
    // console.log({component: lucas})
    this.worker.onmessage = (event: MessageEvent) => {
      console.log('on message:', event.data) // ! aqui funciona!!
    }
    this.worker.onerror = (data: any) => {
      console.error('on error:', data)
    }
    console.log(t.worker)
    this.worker.postMessage('lucas')
  }
  get needWorkerSetup() {
    return this.workers.length === 0
  }
  @Watch('workers')
  workersChange(workers: any) {
    console.log(workers)
    if (workers.length === 0)
      this.notification = 'Zero Web Workers - click "Create more Workers"'
  }
  test() {
    console.log(this.workers)
    const worker: any = this.getWorker()
    if (worker) worker.message({ hello: 'world' })
    else this.notification = 'No more test workers available'
  }
  long(miliseconds: any) {
    // let worker: any = this.getWorker()
    let worker: any = this.worker
    // if (worker) {
    //   // worker.listen(longRunningListener)
    //   worker.listen()
    //   worker.inUse = true
    //   Vue.set(this.workers, this.workers.indexOf(worker), worker)
    //   this.longRunningWorkers.push(worker)
    // } else {
    //   worker = this.longRunningWorkers[
    //     this.longIndex++ % this.longRunningWorkers.length
    //   ]
    // }
    worker.message({ action: 'expensive', time: miliseconds })
    // if (worker) worker.message({ action: 'expensive', time: miliseconds })
    // else this.notification = 'No more long running workers available'
  }
  freeWorker() {
    const worker = this.longRunningWorkers.pop()
    worker.unlisten(longRunningListener)
    worker.inUse = false
    this.notification = 'Worker freed'
  }
  removeWorker() {
    if (this.workers.length > 0) {
      const worker = this.workers.pop()
      if (this.longRunningWorkers.indexOf(worker) > -1)
        this.longRunningWorkers.splice(
          this.longRunningWorkers.indexOf(worker),
          1
        )
      worker.destroy()
    }
  }
  createWorkers() {
    if (process.browser) {
      const that: any = this
      this.worker = that.$worker.createWorker()
      // for (let i = 0, len = navigator.hardwareConcurrency || 1; i < len; i++) {
      //   /* eslint-disable-next-line */
      //   const that: any = this
      //   this.workers.push(that.$worker.createWorker())
      // }
      this.notification = 'Go nuts!'
    }
  }
  getWorker() {
    return this.workers.filter((w) => !w.inUse).reduce((a, b) => a || b, null)
  }
}
</script>

<style lang="scss" scoped>
</style>
