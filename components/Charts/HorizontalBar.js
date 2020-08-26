import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  props: {
    data: Object
  },
  mounted() {
    // Overwriting base render method with actual data.
    const ctx = document.getElementById('horizontalbar-chart').getContext('2d');
    const gradient = ctx.createLinearGradient(1, 0, 400, 0);
    gradient.addColorStop(1, 'rgba(253,93,147,0.2)');
    gradient.addColorStop(0.4, 'rgba(253,93,147,0.0)');
    gradient.addColorStop(0, 'rgba(0,0,0,0)');
    this.data.datasets[0].backgroundColor = gradient;
    this.renderChart(this.data, {
      responsive: false,
      maintainAspectRatio: false,
      legend: false,
      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
      },
      scales: {
        yAxes: [{
          gridLines: {
            drawBorder: false,
            color: 'transparent',
            zeroLineColor: 'transparent',
          },
          ticks: {
            padding: 20,
            fontColor: '#9e9e9e',
          },
        }],
        xAxes: [{
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            padding: 20,
            fontColor: '#9e9e9e',
          },
        }],
      },
    })
  }
}