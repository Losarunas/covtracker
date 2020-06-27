import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Header from './components/Header';
import Main from './components/Main';

export default class App extends Component {
  state = {
    data: null,
    country: null,
    testData: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 6, 3],
      }]
    }
  }

  componentDidMount = () => {
    // this.fetchData();
  }

  fetchData = async () => {
    const url = `https://api.covid19api.com/summary`;
    // const url = `https://api.covid19api.com/country/lithuania`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ data });
  }

  showState = () => {
    console.log(this.state);
  }

  render() {
    // const { NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered } = this.state.data.Global;
    return (
      <div>
        <Header />
        <Main />
        <button
          onClick={this.fetchData}>
          Fetch
        </button>
        <button
          onClick={this.showState}>
          State
        </button>
        <div className="total-stats">
          {this.state.data ? (
            <p>{this.state.data.Global.NewConfirmed}</p>
          ) : (
              null
            )}
        </div>
      </div>
    )
  }
}

