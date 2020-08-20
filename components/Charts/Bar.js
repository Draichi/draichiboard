import { Bar } from 'vue-chartjs'
 
export default {
  extends: Bar,
  props: {
    data: Object,
  },
  mounted () {
    const ctx = document.getElementById('bar-chart').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 250, 0, 1);
    gradient.addColorStop(1, 'rgba(72,72,176,0.2)');
    gradient.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradient.addColorStop(0, 'rgba(119,52,169,0)');
    this.data.datasets[0].backgroundColor = gradient;
    this.renderChart(this.data, {
      responsive: true,
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
            color: 'rgba(29,140,248,0.1)',
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
            color: 'transparent',
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