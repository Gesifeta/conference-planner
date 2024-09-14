import { Outlet } from 'react-router-dom'

import Navigation from './Navigation'

const Home = () => {
    return (
        <div className="app__home">
            <Navigation />
            <Outlet />
        </div>

    )
}

export default Home