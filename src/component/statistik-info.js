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
      <ul class="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
        </li>
      </ul>
      <div class="tab-content d-flex justify-content-center" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <div class="card shadow">
            <div class="card-body text-center">
              <h3>Data Covid-19 di Indonesia</h3>
              <canvas id="myChart"></canvas>
            </div>
          </div>
        </div>
      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
          <div class="card shadow">
              <div class="card-body text-center">
                <h3>Data Covid-19 di Indonesia / Hari</h3>
                <canvas id="chart-covid-daily"></canvas>
              </div>
            </div>
        </div>
      <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 col-lg-8">
        </div>
      </div>
      <div class="row d-flex justify-content-center mt-5 mb-5">
        <div class="col-md-10 col-lg-8">
          
        </div>
      </div>
    `;
  }
}

customElements.define("statistik-info", StatistikInfo);