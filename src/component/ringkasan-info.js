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
    ` <div class="wrapper d-flex flex-column align-items-center">
        <div class="text-light mb-5 text-center">
          <h1 class="count">${this._confirmed}</h1>
          <span>Covid - 19</span>
        </div>

        <div class="row justify-content-center">
        <div class="col-10 col-md mb-3">
            <div class="card shadow border-red">
              <div class="card-body text-center">
                <h3>Positif</h3>
                <p>${this._confirmed}</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-md mb-3">
            <div class="card shadow border-green">
              <div class="card-body text-center">
                <h3>Sembuh</h3>
                <p>${this._recovered}</p>
              </div>
            </div>
          </div>
          <div class="col-10 col-md">
            <div class="card shadow border-black">
              <div class="card-body text-center">
                <h3>Meninggal</h3>
                <p>${this._deaths}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

}

customElements.define("ringkasan-info", RingkasanInfo);