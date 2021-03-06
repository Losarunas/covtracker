import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Chart from './components/Chart';

export default class App extends Component {
  state = {
    country: "World",
    countrySlug: null,
    data: null,
    countryData: null
  }

  componentDidMount = () => {
    this.fetchData();
  }

  //  fdate = () => {
  //     const url = `https://api.covid19api.com/summary`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     return data
  //  }

  fetchData = async () => {
    const url = `https://api.covid19api.com/summary`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data });
  }

  fetchCountryData = async (country) => {
    const url = `https://api.covid19api.com/total/country/${country}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ countryData: data });
  }

  onSelectChange = (country) => {
    // Fetch country data, remove parentheses
    this.setState({ countryData: null });
    country !== "World" && this.fetchCountryData(country.replace(/[()]/g, ''));
    this.setState({ country });
  }


  render() {
    return (
      <div>
        <Header />
        <Main
          data={this.state.data}
          countryData={this.state.countryData}
          country={this.state.country}
          onSelectChange={(country) => this.onSelectChange(country)}
        />
        <Chart
          data={this.state.data}
          countryData={this.state.countryData}
          country={this.state.country}
        />
      </div>
    )
  }
}

