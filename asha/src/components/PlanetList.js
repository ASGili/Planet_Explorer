import IndividualPlanet from "./IndividualPlanet"

const PlanetList = ({planets, getOnePlanet, getImageNASA,deletePlanet})=>{

    // Create a list of IndividualPlanet components based on the planets array
    const planetList = planets.map((planet)=> {
        return <IndividualPlanet 
            key={planet._id}
            planet={planet}
            getOnePlanet={getOnePlanet}
            getImageNASA={getImageNASA}
            deletePlanet={deletePlanet}
        />
    } )

    return (
        <>
        <h2 className="planets-heading">THE PLANETS OF THE SOLAR SYSTEM</h2>
        <ul className="planetList">
            <img className="planet2"/>
            {planetList} 
        </ul>
        </>
    )
}

export default PlanetList