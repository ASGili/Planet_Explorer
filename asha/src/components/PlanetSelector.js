import {useState, useEffect} from 'react'
const PlanetSelector = ({planets})=> {

    const [colour, setColour] = useState("")



const filteredPlanets = planets.filter((planet) => {
    return(
    planet.Color.includes(colour)
    )
})

const mappedPlanets = filteredPlanets.map((planet) => {
    return(
    <li>{planet.Planet}</li>
    )
})

console.log(mappedPlanets)
const handleColour = (event) => {
setColour(event.target.value)

}

    return (
        <>
        <h2>Planet Selector</h2>
        <select onChange={handleColour}>
            <option value="Blue">Blue</option>
            <option value="Grey">Grey</option>
            <option value="Brown">Brown</option>
            <option value="Green">Green</option>
            <option value="White">White</option>
            <option value="Red">Red</option>
            <option value="Tan">Tan</option>
            <option value="Orange">Orange</option>
            <option value="Golden">Golden</option>
        </select>
        
        
<ul>
    {mappedPlanets}
</ul>
        </>
    )
}

export default PlanetSelector