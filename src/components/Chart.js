import React from 'react';
import { Pie, Line } from 'react-chartjs-2';

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
                null
            ));

    const countryChart =
        (country !== "World" && countryData ? (
            <Line
                data={{
                    labels: [countryData.map((i, num) => `Day ${num + 1}`)],
                    datasets: [
                        {
                            label: 'Confirmed',
                            backgroundColor: ['rgba(255, 0, 0, 0.5)'],
                            showLine: false,
                            data: [countryData.map((i) => i.Confirmed)],
                        },
                    ],
                }}
                options={{
                    borderColor: ['#fff'],
                    hoverBorderColor: ['#000'],
                    showLines: false,
                    elements: {
                        line: {
                            tension: 0 // disables bezier curves
                        }
                    }
                }}
            />
        ) : (
                null
            ));

    return (
        <div>
            {country === "World" ? worldChart : countryChart}
        </div>

    )
}

export default Chart
