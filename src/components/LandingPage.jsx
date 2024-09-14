import { useNavigate } from "react-router-dom"

const LandingPage = () => {
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate("/home", { replace: true })
    }
    return (
        <section className='app__landing-page'>
            <div className='app__landing-page--cta'>
                <h1>Conference Expense Planner</h1>
                <h6>Plan your next meeting</h6>
                <button onClick={handleSubmit}>Get Started</button>
            </div>
            <div className='app__landing-page--about'>
                <p>About Us

                    Welcome to BudgetEase!. At BudgetEase, we are passionate about creating exceptional conference experiences that leave a lasting impact. With years of expertise in event planning, our dedicated team specializes in designing and executing professional conferences tailored to your unique needs. From concept to completion, we manage every detail, ensuring seamless logistics, engaging programming, and memorable networking opportunities.</p>
                <p>
                    Our comprehensive services include venue selection, registration management, speaker coordination, audio-visual production, and more. We work closely with you to understand your vision and objectives, transforming them into a well-organized and successful event. Whether you’re planning a small corporate meeting or a large-scale industry conference, our commitment to excellence and personalized service ensures a flawless execution every time.</p>
                <p>

                    Partner with BugdetEase for your next conference, and experience the difference of working with a team that truly cares about making your event remarkable. Let’s create something extraordinary together!</p>
            </div>
        </section>
    )
}

export default LandingPage