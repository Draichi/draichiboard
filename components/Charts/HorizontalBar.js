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
          data: [40, 20, 12, 39],
          backgroundColor: ['#e357cd', '#fd5d93', '#cc65fe', '#ffce56']
        }
      ]
    }, {
      responsive: false,
      maintainAspectRatio: false,
      legend: false,
    })
  }
}