import React from 'react';
import Covid19img from '../images/cov.png';

const Main = ({ country, data, onSelectChange }) => {
    const onChange = (e) => {
        onSelectChange(e);
    }
    const worldInfo = (
        country === "World" && data ? (
            <div>
                <div className="card__block">
                    <div className="card__name">
                        Total infected:
        </div>
                    <div className="card__stats">
                        <div className="card__total">
                            {data.Global.TotalConfirmed.toLocaleString()}
                        </div>
                        <div className="card__today">
                            {data.Global.NewConfirmed.toLocaleString()}
                        </div>
                    </div>
                </div>
                <div className="card__block">
                    <div className="card__name">
                        Total deaths:
        </div>
                    <div className="card__stats">
                        <div className="card__total">
                            {data.Global.TotalDeaths.toLocaleString()}
                        </div>
                        <div className="card__today">
                            {data.Global.NewDeaths.toLocaleString()}
                        </div>
                    </div>
                </div>

                <div className="card__block">
                    <div className="card__name">
                        Total recovered:
        </div>
                    <div className="card__stats">
                        <div className="card__total">
                            {data.Global.TotalRecovered.toLocaleString()}
                        </div>
                        <div className="card__today">
                            {data.Global.NewRecovered.toLocaleString()}
                        </div>
                    </div>
                </div>
                <div className="card__active">
                    <div className="card__name">
                        Active:
        </div>
                    <div className="card__total">
                        {(data.Global.TotalConfirmed - data.Global.TotalRecovered - data.Global.TotalDeaths).toLocaleString()}
                    </div>
                </div>
                <div className="card__last__update">
                    Updated: {data.Date.replace('Z', ' ').replace('T', ' ')}
                </div>
            </div>
        ) : null
    );

    const countryInfo = (
        country !== "World" && data ? (
            <div>
                Country{console.log(data)}
            </div>
        ) : null
    )

    return (
        data ? (
            <section className="main">
                <div className="main__card">
                    <img src={Covid19img} alt="covid-19-1" className="card__image" />
                    <div className="card__content">
                        <div className="card__location">
                            {country}
                        </div>

                        {country === "World" ? worldInfo : countryInfo}

                    </div>
                </div>

                <select onChange={(e) => onChange(e.target.value)}>
                    <option value="World">World</option>
                    {data.Countries.map(i => (<option key={i.Country} value={i.Country}>{i.Country}</option>))}
                </select>

            </section>
        ) : (
                null
            )
    )
}
export default Main;

