const numeral = require("numeral");

class RingkasanInfo extends HTMLElement
{
  set infoGlobal({confirmed, recovered, deaths})
  {
    this._confirmed = numeral(confirmed.value).format("0,0");
    this._deaths = numeral(deaths.value).format("0,0");
    this._recovered = numeral(recovered.value).format("0,0");
    
    this.render();
  }

  render()
  {
    this.innerHTML = 
    ` <div class="wrapper d-flex flex-column align-items-center">
        <div class="text-light mb-5 text-center">
          <h1 class="count"><b>${this._confirmed}<b></h1>
          <span>Covid - 19 di Dunia</span>
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