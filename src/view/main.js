import "../component/nav-bar";
import "../component/ringkasan-info";
import "../component/statistik-info";
import "../component/kontak-info";
import Chart from "chart.js";
import MathdroCovid from "../data/mathdro-covid";

import chartIndo from "../component/chart/chart-bar-indo-total";
import ChartIndoDay from "../component/chart/chart-bar-indo-perhari";


export default () => {
  const ringkasanInfo = document.querySelector("ringkasan-info");
  
  const getData = MathdroCovid;

  getData.indonesia().then(res => chartIndo(res));

  getData.global().then(res => ringkasanInfo.infoGlobal = res);

  getData.indoDaily().then(res => ChartIndoDay(res));
}