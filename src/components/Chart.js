import React from 'react';
import { Pie, Line } from 'react-chartjs-2';

const Chart = ({ data, country }) => {
    return (
        data ? (
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
            )
    )
}

export default Chart
