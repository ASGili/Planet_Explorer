import {useState, useEffect} from 'react'
const PlanetSelector = ({planets})=> {

    const [colour, setColour] = useState("Default")
    const [ringsValue, setRingsValue] = useState(null)
    

// with filter, it needs to be true to put into the array (filteredPlanets)
const filteredPlanets = planets.filter((planet) => {
    return(
    planet.Color.includes(colour)
    &&
    (ringsValue === null || planet.RingSystem.toString() == ringsValue)
)})

const mappedPlanets = filteredPlanets.map((planet, index) => {
    return(
    <li key={index}>{planet.Planet}</li>
    )
})

const handleColour = (event) => {
setColour(event.target.value)
}

const handleRings = (event) => {
    console.log(event.target.value)
    setRingsValue(event.target.value)
}

    return (
        
        <>
        <h2>Planet Selector</h2>
        <ul>
            {mappedPlanets}
        </ul>
            <label>What colour does your planet have?</label><br></br>
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
        </select> <br></br>
        <>
        <label>Does your planet have rings? </label><br />
        <form onChange={handleRings}>
        <input type="radio" name="rings" value="true" id="option1"></input>
        <label htmlFor="option1">Yes!</label>

    
        <input type="radio" name="rings" value="false" id="option2"></input>
        <label htmlFor="option2">No!</label><br/>
        </form>

        </>
        

        </>
    )
}

export default PlanetSelector