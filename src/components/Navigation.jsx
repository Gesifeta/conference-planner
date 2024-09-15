import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Navigation = () => {
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(false)
    const handleClick = (e) => {
        const text = e.target.innerText
        navigate(`/home/${text.toLowerCase()}`, { replace: true })
    }
    const handleActive = (event) => {
        let target = event.target
        let element = document.querySelectorAll('.service')
        element.forEach((e) => {
            e.classList.remove('active')
        })
        target.classList.add('active')
    }
    return (
        <nav className='app__navigation'>
            <p style={{ textWrap: "nowrap" }} className='app__navigation-logo'>Conference Expense Planner</p>
            <div className='app__navigation-services'>
                <span className="service " onClick={(event) => {
                    handleClick(event)
                    handleActive(event)
                }} >Venue</span>
                <span className="service" onClick={(event) => {
                    handleClick(event)
                    handleActive(event)
                }} >Add-ons</span>
                <span className="service" onClick={(event) => {
                    handleClick(event)
                    handleActive(event)

                }} >Meals</span>
            </div>
            <span className='app__navigation-detail'>Show Details</span>
        </nav>
    )
}

export default Navigation