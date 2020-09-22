class KontakInfo extends HTMLElement {
  connectedCallback()
  {
    this.render();
  }

  render() 
  {
    this.innerHTML = 
    `
    <h2 class="text-center pt-5 mb-5">Kontak Info</h2>
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <a href="https://covid19.go.id/peta-sebaran">
            <img src="https://covid19.go.id/storage/app/media/bersatu-lawan-covid-19.jpg" alt="Logo Covid-19 Pemerintah Indonsia" class="img-fluid">
          </a>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define("kontak-info", KontakInfo)