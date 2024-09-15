import React from 'react'

const ServiceCard = ({ service }) => {
    // const { id, name, description, price, quantity, image } = props
    return (
        <section className='app__service-card'>
            <img src={service.image} alt={service.name} />
            <div className="app__service-card--detail">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <p style={{ fontWeight: "bold" }}>${service.price}</p>
            </div>
            <div className="app__service-card--actions">
                <span className='app__service-card--remove'>-</span>
                <span className='app__service-card--quantity'>{service.quantity}</span>
                <span className='app__service-card--add'>+</span>
            </div>

        </section>
    )
}

export default ServiceCard