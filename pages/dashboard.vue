<script setup lang="ts">
import Chart from 'chart.js/auto'

function createTimeSeriesChart() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 40 },
    { year: 2015, count: 30 },
    { year: 2015, count: 14 },
    { year: 2015, count: 35 },
    { year: 2015, count: 38 },
    { year: 2015, count: 4 },
    { year: 2016, count: 9 },
    { year: 2017, count: 3 },
    { year: 2018, count: 28 },
  ]

  const canvas = document.getElementById(
    'commits-time-series'
  ) as HTMLCanvasElement

  const context = canvas.getContext('2d')

  const height = canvas.height

  const gradient = context?.createLinearGradient(0, 0, 0, height)

  gradient?.addColorStop(0, 'rgba(79, 209, 197, 0.24)')
  gradient?.addColorStop(1, 'rgba(79, 209, 197, 0)')

  new Chart(canvas, {
    type: 'line',
    data: {
      labels: data.map(
        (row) => `In ${row.year} there was ${row.count} commits`
      ),
      datasets: [
        {
          data: data.map((row) => row.count),
          backgroundColor: gradient,
          fill: true,
          tension: 0.5,
          borderColor: '#42b883',
          borderWidth: 2.5,
          borderDash: [],
          borderDashOffset: 0,
          pointBackgroundColor: '#42b883',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 2.5 / 2,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          intersect: false,
          titleAlign: 'center',
          titleSpacing: 3,
          callbacks: {
            label: () => '',
          },
        },
      },

      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    },
  })
}

onMounted(() => {
  createTimeSeriesChart()
})
</script>

<template>
  <main :class="$style.main">
    <section :class="$style.section">
      <div :class="$style.container">
        <canvas id="commits-time-series" :class="$style.canvas"></canvas>
      </div>
      <h1 :class="$style.title">draichiboard</h1>
    </section>
  </main>
</template>

<style module>
.main {
  min-height: 100vh;
  background: #0b0f0f;
  background: radial-gradient(
    88.21% 14.29% at 9.87% 31.58%,
    #172625 0%,
    #0b0f0f 100%
  );
  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
}
.container {
  height: 230px;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.canvas {
  position: absolute;
  top: 0;
  left: -25px;
  right: -25px;
  width: calc(100% + 50px) !important;
}

.title {
  text-align: center;
  font-size: 4rem;
  line-height: 4.8rem;
  font-weight: 400;
  font-family: 'Lacquer', fantasy;
  letter-spacing: -0.11em;
  color: #4fd1c5;
}
</style>
