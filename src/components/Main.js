import React from 'react';
import CountUp from 'react-countup';
import Covid19img from '../images/cov.png';
import Loader from './Loader';

const Main = ({ country, data, countryData, onSelectChange }) => {
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
                            <CountUp
                                start={data.Global.TotalConfirmed - 1000000}
                                end={data.Global.TotalConfirmed}
                                duration={0.8}
                                separator=" "
                            />
                        </div>
                        <div className="card__today">
                            <CountUp
                                start={0}
                                end={data.Global.NewConfirmed}
                                duration={0.8}
                                separator=" "
                            />
                        </div>
                    </div>
                </div>
                <div className="card__block">
                    <div className="card__name">
                        Total deaths:
                    </div>
                    <div className="card__stats">
                        <div className="card__total">
                            <CountUp
                                start={data.Global.TotalDeaths - 10000}
                                end={data.Global.TotalDeaths}
                                duration={1.1}
                                separator=" "
                            />
                        </div>
                        <div className="card__today">
                            <CountUp
                                start={0}
                                end={data.Global.NewDeaths}
                                duration={1.2}
                                separator=" "
                            />
                        </div>
                    </div>
                </div>

                <div className="card__block">
                    <div className="card__name">
                        Total recovered:
                    </div>
                    <div className="card__stats">
                        <div className="card__total">
                            <CountUp
                                start={data.Global.TotalRecovered - 100000}
                                end={data.Global.TotalRecovered}
                                duration={1.6}
                                separator=" "
                            />

                        </div>
                        <div className="card__today">
                            <CountUp
                                start={0}
                                end={data.Global.NewRecovered}
                                duration={1.7}
                                separator=" "
                            />

                        </div>
                    </div>
                </div>
                <div className="card__active">
                    <div className="card__name">
                        Active:
                    </div>
                    <div className="card__total">
                        <CountUp
                            start={10000}
                            end={(data.Global.TotalConfirmed - data.Global.TotalRecovered - data.Global.TotalDeaths)}
                            duration={2.2}
                            separator=" "
                        />
                    </div>
                </div>
                <div className="card__last__update">
                    Updated: {data.Date.replace('Z', ' ').replace('T', ' ')}
                </div>
            </div>
        ) : <Loader />
    );

    const countryInfo = (
        country !== "World" && countryData ? (
            <div>
                <div className="card__block">
                    <div className="card__name">
                        Total infected:
                    </div>
                    <div className="card__stats">
                        <div className="card__total">
                            <CountUp
                                start={0}
                                end={countryData[countryData.length - 1].Confirmed}
                                duration={0.3}
                                separator=" "
                            />

                        </div>
                    </div>
                </div>
                <div className="card__block">
                    <div className="card__name">
                        Total deaths:
                    </div>
                    <div className="card__stats">
                        <div className="card__total">
                            <CountUp
                                start={0}
                                end={countryData[countryData.length - 1].Deaths}
                                duration={0.5}
                                separator=" "
                            />

                        </div>
                    </div>
                </div>
                <div className="card__block">
                    <div className="card__name">
                        Total recovered:
                    </div>
                    <div className="card__stats">
                        <div className="card__total">
                            <CountUp
                                start={0}
                                end={countryData[countryData.length - 1].Recovered}
                                duration={0.7}
                                separator=" "
                            />

                        </div>
                    </div>
                </div>
                <div className="card__block">
                    <div className="card__name">
                        Active:
                    </div>
                    <div className="card__stats">
                        <div className="card__total">
                            <CountUp
                                start={0}
                                end={countryData[countryData.length - 1].Active}
                                duration={1}
                                separator=" "
                            />
                        </div>
                    </div>
                </div>
            </div>
        ) : <Loader />
    )

    return (
        data || countryData ? (
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

                Top countries:
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

