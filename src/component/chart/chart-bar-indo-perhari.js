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
        backgroundColor: ['rgb(255, 61, 103)'],
        data: dataChart.positif,
        fill: false,
      },{
        label: 'Sembuh',
        fill: false,
        backgroundColor: ['rgba(24, 235, 52, 0.75)'],
        borderColor: ['rgba(24, 235, 52, 0.75)'],
        data: dataChart.sembuh,
      }, {
        label: 'Meninggal',
        fill: false,
        backgroundColor: ['rgba(0,0,0,0.75)'],
        borderColor: ['rgba(0,0,0,0.75)'],
        data: dataChart.meninggal,
      }]
    },
    options: {
      responsive: true,
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Hari'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Jumlah Orang'
          }
        }]
      }
    }
  });
}