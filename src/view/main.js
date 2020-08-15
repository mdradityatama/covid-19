import "../component/nav-bar";
import "../component/ringkasan-info";
import "../component/statistik-info";
import Chart from "chart.js";
import MathdroCovid from "../data/mathdro-covid";

import chartIndo from "../component/chart/chart-bar";


export default () => {
  const ringkasanInfo = document.querySelector("ringkasan-info");
  const chartCovidDaily = document.getElementById("chart-covid-daily");
  
  const getData = MathdroCovid;

  getData.indonesia().then(res => chartIndo(res));

  getData.global().then(res => ringkasanInfo.infoGlobal = res);

  getData.indoDaily().then(res => {
    const dataChart = {
      dateForLabels: [],
      positif: [],
      sembuh: [],
      meninggal: []
    }

    res.data.forEach(data => {
      const date = new Date(data.tanggal);
      dataChart.dateForLabels.push(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`);
      dataChart.positif.push(data.jumlahKasusBaruperHari);
      dataChart.sembuh.push(data.jumlahKasusSembuhperHari);
      dataChart.meninggal.push(data.jumlahKasusMeninggalperHari);
    })
    
    var myBarChart = new Chart(chartCovidDaily, {
      type: 'line',
      data: {
        labels: dataChart.dateForLabels,
        datasets: [{
          label: 'Positif',
          backgroundColor: ['rgb(255, 61, 103)'],
          borderColor: ['rgb(255, 61, 103)'],
          data: dataChart.positif,
          fill: false,
        }, {
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
        title: {
          display: false,
          text: 'Chart.js Line Chart'
        },
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
  });



  // const chartDaily = new Chart(chartCovidDaily, {
  //   type: 'line',
  //   data: {
  //     labels: ['January', 'February', 'March'],
  //     datasets: [{
  //       label: 'My First dataset',
  //       backgroundColor: ['rgba(255, 12, 12, 0.925)'],
  //       borderColor: ['rgba(255, 12, 12, 0.925)'],
  //       data: [],
  //       fill: false,
  //     }]
  //   },
  //   options: {
  //     responsive: true,
  //     title: {
  //       display: true,
  //       text: 'Chart.js Line Chart'
  //     },
  //     tooltips: {
  //       mode: 'index',
  //       intersect: false,
  //     },
  //     hover: {
  //       mode: 'nearest',
  //       intersect: true
  //     },
  //     scales: {
  //       xAxes: [{
  //         display: true,
  //         scaleLabel: {
  //           display: true,
  //           labelString: 'Month'
  //         }
  //       }],
  //       yAxes: [{
  //         display: true,
  //         scaleLabel: {
  //           display: true,
  //           labelString: 'Value'
  //         }
  //       }]
  //     }
  //   }
  // })
}