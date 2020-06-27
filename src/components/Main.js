import React, { Component } from 'react';
import Covid19img from '../images/cov.png';

export default class Main extends Component {
    render() {
        return (
            <section className="main">
                <div className="main__card">
                    <img src={Covid19img} alt="covid-19-1" className="card__image" />
                    <div className="card__content">
                        <div className="card__location">
                            World
                            </div>
                        <div className="card__block">
                            <div className="card__name">
                                Total infected:
                            </div>
                            <div className="card__stats">
                                <div className="card__total">
                                    100000
                                </div>
                                <div className="card__today">
                                    10
                                </div>
                            </div>
                        </div>

                        <div className="card__block">
                            <div className="card__name">
                                Total deaths:
                            </div>
                            <div className="card__stats">
                                <div className="card__total">
                                    100000
                                </div>
                                <div className="card__today">
                                    10
                                </div>
                            </div>
                        </div>

                        <div className="card__block">
                            <div className="card__name">
                                Total recovered:
                            </div>
                            <div className="card__stats">
                                <div className="card__total">
                                    100000
                                </div>
                                <div className="card__today">
                                    10
                                </div>
                            </div>
                        </div>


                        <div className="card__active">
                            <div className="card__name">
                                Active:
                            </div>
                            <div className="card__total">
                                500
                            </div>
                        </div>
                        <div className="card__last__update">
                            2020-06-24 12:00
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
