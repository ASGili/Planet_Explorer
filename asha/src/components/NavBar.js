import { Link } from "react-router-dom"

const NavBar = () => {

    return(
    <header>
        <ul className="nav-bar">
            <Link to="/" className="btns">Home</Link>
            <Link to="/planets" className="btns">Planets</Link>
            <Link to="/selector" className="btns">Find a Planet</Link>
            <Link to="/custom-planet" className="btns">Create a Planet</Link>
        </ul>
    </header>
    )
}

export default NavBar