import React from 'react'

const ServiceCard = ({ service }) => {
    return (
        <section className='app__service-card'>
            <img src={service.image} alt={service.name} />
            <div className="app__service-card--detail">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
            </div>
            <div className="app__service-card-action">
                <span className='app__service-card--remove'>-</span>
                <span>{service.quantity}</span>
                <span className='app__service-card--add'>+</span>
            </div>
            <div className="app__service-cost">
                <span>Total cost:{service.totalCost}</span>
            </div>

        </section>
    )
}

export default ServiceCard