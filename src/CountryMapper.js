class CountryMapper {

  constructor(notify) {

    this.labels = [];
    this.countries = [];
    this.observers = [];

    if (notify != undefined)
      this.addObserver(notify);

    Promise.all([this.getLabelsPromise(), this.getCountriesPromise()]).then(results => {
      this.labels = results[0];
      this.countries = results[1];
      this.notifyObservers();
      this.createInterval(3000);
    }, this);
  }

  createInterval = (ms) => {
    setTimeout(() => {
      setInterval(() => {
        this.getCountriesPromise().then(countries => {
          this.countries = countries;
          this.notifyObservers();
        }, this);
      }, 3000, this);
    }, 3000);
  }

  addObserver = (cb) => {
    this.observers.push(cb);
  }

  notifyObservers = () => {
    this.observers.forEach(cb => cb(this.labels, this.countries));
  }

  getLabelsPromise = async () => {
    const res = await fetch("http://localhost:3333/labels");
    const data = await res.json();
    return data;
  }

  getCountriesPromise = async () => {
    const res = await fetch("http://localhost:3333/countries");
    const data = await res.json();
    return data;
  }
}

export default CountryMapper;