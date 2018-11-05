class CountryMapper {

  getLabels = async (cb) => {
    const res = await fetch("http://localhost:3333/labels");
    const data = await res.json();
    return data;
  }

  getCountries = async (cb) => {
    const res = await fetch("http://localhost:3333/countries");
    const data = await res.json();
    return data;
  }
}

export default CountryMapper;