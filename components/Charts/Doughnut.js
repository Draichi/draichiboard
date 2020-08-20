import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April'],
      datasets: [
        {
          label: 'GitHub Commits',
          data: [40, 20, 12, 39],
          borderColor: ['#fd5d93', '#36a2eb', '#cc65fe', '#ffce56'], // #fd5d93 pink option
          borderWidth: 2,
          backgroundColor: [
            'rgba(253, 93, 147,0.1)',
            'rgba(54, 162, 235, 0.1)', 'rgba(204, 101, 254, 0.1)', 'rgba(255, 206, 86, 0.1)']
        }
      ]
    }, {
      responsive: true,
      legend: false,
    })
  }
}