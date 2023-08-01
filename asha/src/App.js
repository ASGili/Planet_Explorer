import NavBar from "./components/NavBar";
import HomeInfo from "./components/HomeInfo";
import PlanetList from "./components/PlanetList";
import PlanetSelector from "./components/PlanetSelector";
import PlanetService from "./services/PlanetService";
import CreatePlanet from "./components/CreatePlanet";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import PlanetDetail from "./components/PlanetDetail";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // Define the state variables using the useState hook
  const [planets, setPlanets] = useState([]);
  const [onePlanet, setOnePlanet] = useState(null);
  const [planetImages, setPlanetImages] = useState(null);

  // Fetch all planets when the component mounts using useEffect
  useEffect(() => {
    PlanetService.getPlanets().then((allPlanets) => {
      setPlanets(allPlanets);
    });
  }, []);

  // Function to get information about a specific planet
  const getOnePlanet = (planetId) => {
    PlanetService.getPlanet(planetId).then((chosenPlanet) =>
      setOnePlanet(chosenPlanet)
    );
  };

  // Function to create a new planet
  const createPlanet = (formOutput) => {
    PlanetService.addPlanet(formOutput)
    .then((response)=> console.log(response))
    .then(() => PlanetService.getPlanets()
    .then((allPlanets) => {setPlanets(allPlanets)})
    )
  }

  // Function to delete a planet
  const deletePlanet = (id) => {
    PlanetService.deletePlanet(id)
    .then(() => PlanetService.getPlanets()
    .then((allPlanets) => {setPlanets(allPlanets)})
    )
  }

  // Function to get NASA images of a planet
  const getImageNASA = (planet) => {
    const planetList = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
    let url = ''
    if (planetList.includes(planet) === false ) {
      url = `https://images-api.nasa.gov/search?q=galaxy&media_type=image`
    }
    else if (planet === 'Mars') {
      url = `https://images-api.nasa.gov/search?q=${planet}&media_type=image&year_end=2018`;
    } else {
      url = `https://images-api.nasa.gov/search?q=${planet}&media_type=image`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((planetImg) => setPlanetImages(planetImg.collection));
  };

  return (
    <div className="App">
    
      <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomeInfo />} />
            <Route
              path="/planets"
              element={
                <PlanetList
                  planets={planets}
                  getOnePlanet={getOnePlanet}
                  getImageNASA={getImageNASA}
                  deletePlanet={deletePlanet}
                />
            }/>
            <Route
              path="/selector"
              element={<PlanetSelector planets={planets}
              />
            }/>
            <Route
              path="/planets/:planetId"
              element={
                <PlanetDetail
                  onePlanet={onePlanet}
                  getOnePlanet={getOnePlanet}
                  planetImages={planetImages}
                  getImageNASA={getImageNASA}
                />
            }/>
            <Route
            path="/custom-planet"
            element={
              <CreatePlanet createPlanet={createPlanet}/>
            }
            />
        </Routes>
        <Footer className='footer-container'></Footer>
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;

// https://images-api.nasa.gov/search?q=Mars&media_type=image&year_end=2018