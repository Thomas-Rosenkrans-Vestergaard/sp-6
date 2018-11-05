import React, { Component } from "react";
import CountryMapper from './CountryMapper';

class CountryTable extends Component {

  constructor(props) {
    super(props);

    this.state = { labels: [], countries: [] };
  }

  componentDidMount() {
    const mapper = new CountryMapper((labels, countries) => {
      this.setState({ labels, countries });
    });
  }

  render() {

    const { labels, countries } = this.state;

    return (
      <table className="table">
        <thead>
          <tr>
            {labels.map((label, index) => <th key={index}>{label}</th>)}
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) =>
            <tr key={index}>
              {labels.map((label, index) =>
                <td key={index}>
                  {this.toString(country[label.toLowerCase()])}
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  toString(value) {
    if (typeof value == 'object') {
      if (value.length == 1)
        return value[0];
      return `${value[0]}(+${value.length - 1})`;
    }

    return value;
  }
}
export default CountryTable;