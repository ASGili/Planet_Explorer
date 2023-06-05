import IndividualPlanet from "./IndividualPlanet"

const PlanetList = ({planets})=>{

    const planetList = planets.map((planet)=> {
        return <IndividualPlanet 
            key={planet._id}
            planet={planet}
        />
    } )

    return (
        <>
        <h2>The Planets of the Solar System</h2>
        <ul className="planetList">
            {planetList}
        </ul>
        </>
    )
}

export default PlanetList