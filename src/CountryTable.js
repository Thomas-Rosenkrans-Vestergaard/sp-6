import React, { Component } from "react";

class CountryTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { labels, countries } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            {labels.map(label => <th>{label}</th>)}
          </tr>
        </thead>
        <tbody>
          {countries.map(country =>
            <tr>
              {labels.map(label =>
                <td>
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