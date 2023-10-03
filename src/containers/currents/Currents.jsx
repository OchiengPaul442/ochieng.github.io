import React from 'react';
import './current.css';

function Currents() {
    return (
        <section className="wrapper">
            <div className="container">
                <div className="contribution__text">
                    <h1>Open Source Contributions</h1>
                </div>
                <div className="contributions">
                    <div className="contribution_intro">
                        <h1>AirQo</h1>
                        <p>
                            AirQo is an initiative that aims to monitor and quantify air pollution in African cities. I
                            have made significant contributions to the AirQo platform, particularly in the areas of bug
                            fixes and UI improvements. These contributions have helped enhance the platform's
                            performance and user experience.
                        </p>
                    </div>
                    <div className="contribution__image">
                        <img src={require('../../assets/images/airqo-logo.png')} alt="AirQo logo" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Currents;
