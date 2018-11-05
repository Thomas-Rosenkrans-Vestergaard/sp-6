import React, { Component } from 'react';
import CountryTable from "./CountryTable";
import CountryMapper from "./CountryMapper";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { countries: [], labels: [] };
  }

  componentDidMount() {
    const mapper = new CountryMapper();
    const countries = mapper.getCountries();
    const labels = mapper.getLabels();

    Promise.all([countries, labels]).then((results) => {
      this.setState({ countries: results[0], labels: results[1] });
    });
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <h2>React, State, Fetch and Mobx</h2>
        </div>
        <div className="App-intro">
          <CountryTable countries={this.state.countries} labels={this.state.labels} />
        </div>
      </div>
    );
  }
}

export default App;
