class StatistikInfo extends HTMLElement
{
  connectedCallback()
  {
    this.render();
  }

  render()
  {
    this.innerHTML = 
    `
      <h2 class="text-center pt-5 mb-5">Informasi Penyembaran Covid-19</h2>
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 col-lg-8">
          <div class="card shadow">
            <div class="card-body text-center">
              <h3>Data Covid-19 di Indonesia</h3>
              <canvas id="myChart"></canvas>
            </div>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-center mt-5 mb-5">
        <div class="col-md-10 col-lg-8">
          <div class="card shadow">
            <div class="card-body text-center">
              <h3>Data Covid-19 di Indonesia / Hari</h3>
              <canvas id="chart-covid-daily"></canvas>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("statistik-info", StatistikInfo);