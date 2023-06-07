import { Link } from "react-router-dom"

const NavBar = () => {

    return(
    <header>
        <ul className="nav-bar">
            <Link to="/" className="btns">HOME</Link>
            <Link to="/planets" className="btns">PLANETS</Link>
            <Link to="/selector" className="btns">FIND A PLANET</Link>
            <Link to="/custom-planet" className="btns">MAKE A PLANET</Link>
        </ul>
    </header>
    )
}

export default NavBar