export default (resData) => {
  const chartCovidDaily = document.getElementById("chart-covid-daily");

  const dataChart = {
    dateForLabels: [],
    positif: [],
    sembuh: [],
    meninggal: []
  }

  resData.data.forEach(data => {
    const date = new Date(data.tanggal);
    dataChart.dateForLabels.push(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`);
    dataChart.positif.push(data.jumlahKasusBaruperHari);
    dataChart.sembuh.push(data.jumlahKasusSembuhperHari);
    dataChart.meninggal.push(data.jumlahKasusMeninggalperHari);
  })

  var myBarChart = new Chart(chartCovidDaily, {
    type: 'bar',
    data: {
      labels: dataChart.dateForLabels,
      datasets: [{
        label: 'Positif',
        data: dataChart.positif,
        backgroundColor: 'rgb(255, 61, 103)',
        fill: true,
      },{
        label: 'Sembuh',
        data: dataChart.sembuh,
        backgroundColor: 'rgba(0, 222, 16, 0.8)',
      }, {
        label: 'Meninggal',
        data: dataChart.meninggal,
        backgroundColor: 'rgba(0,0,0,0.75)',
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