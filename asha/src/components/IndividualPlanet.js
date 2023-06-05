import { Link } from "react-router-dom"

const IndividualPlanet = ({planet}) => {
    return (
        <div className="individual-planet-card">
            <Link to={`/${planet._id}`}><h3>{planet.Planet}</h3></Link>
            {/* {console.log(planet._id)} */}
            <p>Distance from the Sun (10<sup>6</sup>km): {planet.DistancefromSun10e6km}</p>
            <button>See More</button>
        </div>
    )
}
export default IndividualPlanet