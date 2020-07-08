import React, { Component } from 'react';
import Covid19img from '../images/cov.png';

const Main = ({ country, data }) => {
        return (
            data ? (
                <section className="main">
                    <div className="main__card">
                        <img src={Covid19img} alt="covid-19-1" className="card__image" />
                        <div className="card__content">
                            <div className="card__location">
                                {country ? (country) : ("World")}
                            </div>
                        
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
                    </div>
                </section>
            ) : (
                null
            )
        )
}
export default Main;

/* <div className="main__card">
        <img src="{Covid19img}" alt="covid-19-1" className="card__image" />
        <div className="card__content">
            <div className="card__location">
                
            </div>
            <div className="card__block">
                <div className="card__name">
                    Total infected:
                </div>
                <div className="card__stats">
                    <div className="card__total">
                        {this.props.Global.NewConfirmed}
                    </div>
                    <div className="card__today">
                        {this.props.Global.NewConfirmed}
                    </div>
                </div>
            </div>

            <div className="card__block">
                <div className="card__name">
                    Total deaths:
                </div>
                <div className="card__stats">
                    <div className="card__total">
                        {this.props.Global.TotalDeaths}
                    </div>
                    <div className="card__today">
                        {this.props.Global.NewDeaths}
                    </div>
                </div>
            </div>

            <div className="card__block">
                <div className="card__name">
                    Total recovered:
                </div>
                <div className="card__stats">
                    <div className="card__total">
                        {this.props.Global.TotalRecovered}
                    </div>
                    <div className="card__today">
                        {this.props.Global.NewRecovered}
                    </div>
                </div>
            </div>

            <div className="card__active">
                <div className="card__name">
                    Active:
                </div>
                <div className="card__total">
                    {this.props.Global.TotalConfirmed - this.props.Global.TotalRecovered - this.props.Global.TotalDeaths}
                </div>
            </div>
            <div className="card__last__update">
                {this.props.Date}
            </div>
        </div>
    </div> */