class NavBar extends HTMLElement
{
  connectedCallback()
  {
    this.render();
  }

  render()
  {
    this.innerHTML = 
    `
      <nav class="navbar navbar-expand-lg navbar-light sticky-top bg-light pt-4 pb-4">
        <div class="container"> 
          <div class="title">
            <a class="navbar-brand mr-0 d-block" href="#">JaSiVid-19</a>
            <span class="d-block">- Jejak si Covid-19 -</span>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="#">Informasi</a>
              <a class="nav-item nav-link" href="#">Kontak</a>
            </div>
          </div>
        </div> 
      </nav>
    `;
  }

}

customElements.define("nav-bar", NavBar);