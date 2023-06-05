const PlanetList = ({planets})=>{
//  removed from line 3. <li className="planet">{planet.name}</li>
    const planetList = planets.map((planet)=> <li className="planet">{planet.Planet}</li>)


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