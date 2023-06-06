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
        <h2>The Planets of the Solar System</h2>
        
        <ul className="planetList">
        <image className="planet2"></image>
        
            {planetList} 
            
        </ul>
        </>
    )
}

export default PlanetList