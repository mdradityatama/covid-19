export default (data) => {
  const chartGlobal = document.getElementById("myChart");

  const {confirmed, recovered, deaths} = data;

  const chart = new Chart (chartGlobal, {
    type: 'bar',
    data: {
      labels: ['Covid - 19 di Indonesia'],
      datasets: [{
          label: "Positif",
          data: [confirmed.value],
          backgroundColor: ['rgba(255, 12, 12, 0.925)']
      }, {
        label: "Sembuh",
        data: [recovered.value],
        backgroundColor: ['rgba(24, 235, 52, 0.75)']
    }, {
      label: "Meninggal",
      data: [deaths.value],
      backgroundColor: ['rgba(0,0,0,0.75)']
    }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  });
}