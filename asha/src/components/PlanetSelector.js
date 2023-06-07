import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PlanetSelector = ({ planets }) => {    
    const [colour, setColour] = useState("Default")
    const [ringsValue, setRingsValue] = useState(null)
    const [tempValue, settempValue] = useState(null)
    const [moonValue, setMoonValue] = useState(0)
    

const filteredPlanets = planets.filter((planet) => {
    return(
    planet.Color.includes(colour)
    &&
    (ringsValue === null || planet.RingSystem.toString() == ringsValue)
    &&
    (tempValue === null || planet.Planet == tempValue || (tempValue > 1 ? planet.MeanTemperatureC > tempValue: planet.MeanTemperatureC < tempValue) )
    &&
    (moonValue <= planet.NumberOfMoons)
    )})

let mappedPlanets = [<p key="no_planets">NO PLANETS LEFT START AGAIN</p>];
    if (filteredPlanets.length) {
      mappedPlanets = filteredPlanets.map((planet, index) => {
        return (
          <li className="planetSelector" key={index}>
            <Link to={`/planets/${planet._id}`}>{planet.Planet}</Link>
          </li>
        );
      });
    }
    
const handleColour = (event) => {
    setColour(event.target.value)
}

const handleRings = (event) => {
    if (event.target.value == "null") {
        setRingsValue(null)
    } else setRingsValue(event.target.value)
}

const handleTemp = (event) => {
    settempValue(event.target.value)
}
const handleMoons = (event) => {
    setMoonValue(event.target.value)
}

  return (
    <>
      <div className="container">
        <ul className="mapped-planets">{mappedPlanets}</ul>
      </div>
      <div className="selector-questions-container">
        <div className="planet-colour">
          <label className="selector-questions">
            {" "}
            1. What colour does your planet have?
          </label>
          <select className="colour-options" onChange={handleColour}>
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
          </select>
        </div>
        <div className="planet-rings">
          <label className="selector-questions">
            2. Does your planet have rings?{" "}
          </label>
          <form className="rings-form" onChange={handleRings}>
            <input type="radio" name="rings" value="true" id="option1" />
            <label htmlFor="option1">Yes!</label>
            <input type="radio" name="rings" value="false" id="option2" />
            <label htmlFor="option2">No!</label>
            <input type="radio" name="rings" value="null" id="option3" />
            <label htmlFor="option3">Unsure</label>
          </form>
        </div>
        <div className="planet-temperature">
          <label className="selector-questions">
            3. How hot is your planet?{" "}
          </label>
          <form onChange={handleTemp}>
            <input type="radio" name="temp" value="0" id="option4"></input>
            <label htmlFor="option4">Brr... Freezing Cold</label>
            <input type="radio" name="temp" value="Earth" id="option5"></input>
            <label htmlFor="option5">About right for humans</label>
            <input type="radio" name="temp" value="20" id="option6"></input>
            <label htmlFor="option6">Boiling Hot</label>
          </form>
        </div>
        <div className="planet-moons">
          <label className="selector-questions">
            4. How many moons does your planet have?{" "}
          </label>
          <input
            onChange={handleMoons}
            min="0"
            max="100"
            value={moonValue}
            type="range"
            name="moons"
            id="option7"
          />
          <p>You have {moonValue} moon(s) selected</p>
        </div>
      </div>
    </>
  );
};

export default PlanetSelector;
