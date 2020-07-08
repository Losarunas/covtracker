import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Chart from './components/Chart';

export default class App extends Component {
  state = {
    country: null,
    data: null
}

  componentDidMount = () => {
    this.fetchData();
  }

  fetchData = async () => {
    const url = `https://api.covid19api.com/summary`;
    // const url = `https://api.covid19api.com/country/lithuania`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data });
  }
  render() {
    return (
      <div>
        <Header />
        <Main 
          data={this.state.data}
          country={this.state.country}
        />
        <Chart 
          data={this.state.data}
          country={this.state.country}
        />
        <button
          onClick={this.showState}>
          State
        </button>
        
      </div>
    )
  }
}

