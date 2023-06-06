import {useState, useEffect} from 'react'
const PlanetSelector = ({planets}) => {

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
    <li className='planetSelector' key={index}>{planet.Planet}</li>
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
        <div className="container">
        {/* <h2>Find a Planet!</h2> */}
        <ul className="mapped-planets">
            
            {mappedPlanets}
            {/* <image className="planet"></image> */}
        </ul>
        </div>
            <div className="centered-dropdown">
            <label> 1. What colour does your planet have?</label>
            
            <select onChange={handleColour}>
            <option value="Default"> Choose Planet Colour</option>
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
            </div>
        <>
    
        <label>2. Does your planet have rings? </label><br/>
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