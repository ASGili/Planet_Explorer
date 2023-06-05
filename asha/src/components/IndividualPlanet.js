import { Link, useNavigate } from "react-router-dom"

const IndividualPlanet = ({planet, getOnePlanet}) => {

    const navigate = useNavigate();

    const handleOnClick = () => {
        getOnePlanet(planet._id)
        setTimeout(() => {
    
            navigate(`/planets/${planet._id}`)
        }, 500);
    }
    return (
        <div className="individual-planet-card">
            {/* <Link to={`/planets/${planet._id}`}><h3>{planet.Planet}</h3></Link> */}
            <h3>{planet.Planet}</h3>
            {/* {console.log(planet._id)} */}
            <p>Distance from the Sun (10<sup>6</sup>km): {planet.DistancefromSun10e6km}</p>
            <button onClick={handleOnClick}>See More</button>
        </div>
    )
}
export default IndividualPlanet