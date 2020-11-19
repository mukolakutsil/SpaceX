import React from 'react';
// import RellaxWrapper from 'react-rellax-wrapper';

import './Features.css';

import img from '../../img/5e9d0d96eda699382d09d1ee.png'
import Main from '../Main/Main';
// const rocketImages = {
//     'Falcon1': 'falcon-1',
//     'Falcon 9': 'falcon-9',
//     'Falcon Heavy': 'falcon-heavy',
//     'Starship': 'starship'

// }


const Features = ({ name, height, diameter, mass, payload_weights, description, id }) => {

    return (
        <>
            <Main rocket={name} />
            <section className="features">
                <h2 className="features-title">
                    {name} <br />Overview
        		</h2>
                <div className="overview">

                    <table className="table">
                        <caption className="table-title">
                            Size
				</caption>
                        <thead>
                            <tr>
                                <td className="table-column">HEIGHT</td>
                                <td className="table-column">{height.meters} m / {height.feet} ft</td>
                            </tr>
                            <tr>
                                <td className="table-column">DIAMETER</td>
                                <td className="table-column">{diameter.meters} m / {diameter.feet} ftt</td>
                            </tr>
                            <tr>
                                <td className="table-column">MASS</td>
                                <td className="table-column">{mass.kg} kg / {mass.lb} lb</td>
                            </tr>

                            {payload_weights.map((item) => (
                                <tr key={item.id}>
                                    <td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
                                    <td className="table-column">{item.kg} kg / {item.lb} lb</td>
                                </tr>
                            ))}

                        </thead>
                    </table>
                    <img
                        src={img}
                        alt="rocket"
                        className="rocket"
                    />
                    <article>
                        <h3 className="features-subtitle">DESCRIPTION</h3>
                        <p className="features-text">
                            {description}
                        </p>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Features;