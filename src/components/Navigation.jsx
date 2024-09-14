import React from 'react'

const Navigation = () => {
    return (
        <nav className='app__navigation'>
            <span className='app__naviagiton-logo'>Conference Expense Planner</span>
            <div className='app__navigation-services'>
                <span >Venue</span>
                <span >Add-ons</span>
                <span >Meals</span>
            </div>
            <span className='app__navigation-detail'>Show Details</span>
        </nav>
    )
}

export default Navigation