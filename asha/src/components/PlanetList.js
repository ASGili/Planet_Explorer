const PlanetList = ({planets})=>{

    const planetList = planets.map((planet)=> <li className="planet">{planet}</li>)

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