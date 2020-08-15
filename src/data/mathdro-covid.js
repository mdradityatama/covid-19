export default class MathdroCovid {

  static baseURL() 
  {
    return "https://covid19.mathdro.id/api";
  }

  static baseUrlIndo()
  {
    return "https://indonesia-covid-19.mathdro.id/api";
  }

  static global() 
  {
    return fetch(this.baseURL())
      .then(res => res.json())
      .then(resJSON => {
        if (resJSON != null) {
          return Promise.resolve(resJSON);
        } else {
          return Promise.reject("Data Kosong!");
        }
      })
  }

  static indonesia()
  {
    return fetch(`${this.baseURL()}/countries/Indonesia`)
      .then(res => res.json())
      .then(resJSON => {
        if(resJSON != null) {
          return Promise.resolve(resJSON);
        } else {
          return Promise.reject("Data Kosong!");
        }
      })
  }

  static indoDaily()
  {
    return fetch(`${this.baseUrlIndo()}/harian`)
      .then(res => res.json())
      .then(resJSON => {
        if (resJSON != null) {
          return Promise.resolve(resJSON);
        } else {
          return Promise.reject("Data Kosong");
        }
      });
  }
}