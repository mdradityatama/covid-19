export default ({data}) => {
  const chartCovidDaily = document.getElementById("chart-covid-daily");

  const dataChart = {
    dateForLabels: [],
    positif: [],
    sembuh: [],
    meninggal: []
  }

  data.forEach(data => {
    const date = new Date(data.tanggal);
    dataChart.dateForLabels.push(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`);
    dataChart.positif.push(data.jumlahKasusBaruperHari);
    dataChart.sembuh.push(data.jumlahKasusSembuhperHari);
    dataChart.meninggal.push(data.jumlahKasusMeninggalperHari);
  })

  const myBarChart = new Chart(chartCovidDaily, {
    type: 'bar',
    data: {
      labels: dataChart.dateForLabels,
      datasets: [{
        label: 'Positif',
        data: dataChart.positif,
        backgroundColor: 'rgb(255, 61, 103)',
        borderColor: 'rgb(255, 61, 103)',
        fill: true
      },{
        label: 'Sembuh',
        data: dataChart.sembuh,
        backgroundColor: 'rgba(0, 222, 16, 0.8)',
        fill: true
      }, {
        label: 'Meninggal',
        data: dataChart.meninggal,
        backgroundColor: 'rgba(0,0,0,0.75)',
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
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