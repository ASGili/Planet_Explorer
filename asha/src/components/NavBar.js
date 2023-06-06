import { Link } from "react-router-dom"

const NavBar = () => {

    return(
    <header>
        <ul className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/planets">Planet List</Link>
            <Link to="/selector">Planet Selector</Link>
        </ul>
    </header>
    )
}

export default NavBar