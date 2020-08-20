import { HorizontalBar } from 'vue-chartjs'
 
export default {
  extends: HorizontalBar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39],
          backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      legend: false,
    })
  }
}