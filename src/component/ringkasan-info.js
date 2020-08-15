class RingkasanInfo extends HTMLElement
{
  set infoGlobal(data)
  {
    const {confirmed, recovered, deaths} = data;

    this._confirmed = confirmed.value;
    this._deaths = deaths.value;
    this._recovered = recovered.value;

    this.render();
  }

  render()
  {
    this.innerHTML = 
    `
      <div class="wrapper text-center text-light mb-5">
        <h1 class="count">${this._confirmed}</h1>
        <span>Covid - 19</span>
      </div>

      <div class="row d-flex justify-content-end">
        <div class="col-md">
          <div class="card shadow" style="width: 13rem;">
            <div class="card-body text-center">
              <h3>Positif</h3>
              <p>${this._confirmed}</p>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card shadow" style="width: 13rem;">
            <div class="card-body text-center">
              <h3>Sembuh</h3>
              <p>${this._recovered}</p>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card shadow" style="width: 13rem;">
            <div class="card-body text-center">
              <h3>Meninggal</h3>
              <p>${this._deaths}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

}

customElements.define("ringkasan-info", RingkasanInfo);