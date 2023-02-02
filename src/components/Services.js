import React from 'react'
import { services } from '../data.js'
import Title from './Title.js'


const Services = () => {
    return (
        <section className="section services" id="services">

            <Title title='Our' subTitle='Services' />

            <div className="section-center services-center">

                {services.map((object) => {
                    return (

                        <article key={object.id} className="service">
                            <span className="service-icon"><i className={object.icon}></i></span>
                            <div className="service-info">
                                <h4 className="service-title"> {object.title} </h4>
                                <p className="service-text">
                                    {object.text}
                                </p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Services