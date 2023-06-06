import IndividualPlanet from "./IndividualPlanet"

const PlanetList = ({planets, getOnePlanet, getImageNASA})=>{

    const planetList = planets.map((planet)=> {
        return <IndividualPlanet 
            key={planet._id}
            planet={planet}
            getOnePlanet={getOnePlanet}
            getImageNASA={getImageNASA}
        />
    } )

    return (
        <>
        <h2 className="planets-heading">The Planets of the Solar System</h2>
        
        <ul className="planetList">
        <img className="planet2"/>
        
            {planetList} 
            
        </ul>
        </>
    )
}

export default PlanetList