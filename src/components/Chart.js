import React from 'react';
import { Pie, Line, Bar } from 'react-chartjs-2';

const Chart = ({ data, country, countryData }) => {
    const worldChart =
        (country === "World" && data ? (
            <Pie
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 0, 0.5)'],
                            data: [data.Global.TotalConfirmed - data.Global.TotalRecovered - data.Global.TotalDeaths, data.Global.TotalRecovered, data.Global.TotalDeaths],
                        },
                    ],
                }}
                options={{
                    borderColor: ['#fff'],
                    hoverBorderColor: ['#000']
                }}
            />
        ) : (
                <div>Loading</div>
            ));

    const countryChart =
        (country !== "World" && countryData ? (
            <div>
                New Cases:

                <Bar
                    data={{
                        labels: countryData.map((i, num) => `Day ${num + 1}`),
                        datasets: [
                            {
                                label: 'New cases',
                                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                                data: countryData.map((i, num) => {
                                    if (num === 0) { return i.Confirmed }
                                    let newCases = i.Confirmed - countryData[num - 1].Confirmed;
                                    // Dont show less than 0 new cases (API data bad?)
                                    if (newCases < 0) { newCases = 0 }
                                    return newCases
                                }),
                            }
                        ],
                    }}
                    options={{
                    }}
                />


                <Line
                    data={{
                        labels: countryData.map((i, num) => `Day ${num + 1}`),
                        datasets: [
                            {
                                label: 'Confirmed',
                                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                                borderColor: 'rgba(255, 0, 0, 0.8)',
                                pointRadius: 2,
                                data: countryData.map((i) => i.Confirmed),
                            },
                            {
                                label: 'Deaths',
                                backgroundColor: ['rgba(0, 0, 0, 0.1)'],
                                borderColor: ['rgba(0, 0, 0, 0.8)'],
                                pointRadius: 2,
                                data: countryData.map((i) => i.Deaths),
                            },
                            {
                                label: 'Recovered',
                                backgroundColor: ['rgba(0, 255, 0, 0.2)'],
                                borderColor: ['rgba(0, 255, 0, 0.8)'],
                                pointRadius: 2,
                                data: countryData.map((i) => i.Recovered),
                            },
                        ],
                    }}
                    options={{
                    }}
                />
            </div>
        ) : (
                null
            ));

    return (
        <div className="charts">
            {country === "World" ? worldChart : countryChart}
        </div>
    )
}

export default Chart
