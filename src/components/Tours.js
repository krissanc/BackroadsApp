import React from 'react'
import Title from './Title.js'
import { tours } from '../data.js'


const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title title="Featured" subTitle="Tours" />

            {tours.map((tour) => {
                return (
                    <article key={tour.id} className="tour-card">
                        <div className="tour-img-container">
                            <img src={tour.image} className="tour-img" alt="" />
                            <p className="tour-date"> {tour.date} </p>
                        </div>
                        <div className="tour-info">
                            <h4> {tour.title} </h4>
                            <p>
                                {tour.info}
                            </p>
                            <div className="tour-footer">
                                <p>
                                    <span><i className="fas fa-map"></i></span> {tour.location}
                                </p>
                                <p> {tour.duration} days </p>
                                <p>from {tour.price}</p>
                            </div>
                        </div>
                    </article>
                )
            })}

        </section >
    )
}

export default Tours