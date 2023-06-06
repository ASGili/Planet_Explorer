import NavBar from "./components/NavBar";
import HomeInfo from "./components/HomeInfo";
import PlanetList from "./components/PlanetList";
import PlanetSelector from "./components/PlanetSelector";
import PlanetService from "./services/PlanetService";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import PlanetDetail from "./components/PlanetDetail";

function App() {
  const [planets, setPlanets] = useState([]);
  const [onePlanet, setOnePlanet] = useState([]);
  const [planetImages, setPlanetImages] = useState([]);

  useEffect(() => {
    PlanetService.getPlanets().then((allPlanets) => {
      setPlanets(allPlanets);
    });
  }, []);

  useEffect(() => {
    const lowerCasePlanet = onePlanet.Planet;
    // console.log(typeof lowerCasePlanet)
    getImageNASA(lowerCasePlanet);
  }, [onePlanet]);

  const setTheOnePlanet = (planet) => {
    setOnePlanet(planet);
  };

  const setOnePlanetById = (planetId) => {
    const planetToBeSelected = planets.find((planet) => planet._id == planetId);
    setOnePlanet(planetToBeSelected);
  };

  const getOnePlanet = (planetId) => {
    PlanetService.getPlanet(planetId).then((chosenPlanet) =>
      setOnePlanet(chosenPlanet)
    );
  };

  // API for numerous images. Currently not using.
  const getImageNASA = (planet) => {
    const url = `https://images-api.nasa.gov/search?q=${planet}&media_type=image`;
    fetch(url)
      .then((res) => res.json())
      .then((planetImg) => setPlanetImages(planetImg.collection));
    // console.log(planetImg)
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeInfo />} />
        <Route
          path="/planets"
          element={
            <PlanetList
              planets={planets}
              setTheOnePlanet={setTheOnePlanet}
              getImageNASA={getImageNASA}
            />
          }
        />
        <Route
          path="/selector"
          element={<PlanetSelector planets={planets} />}
        />
        <Route
          path="/planets/:planetId"
          element={
            <PlanetDetail
              onePlanet={onePlanet}
              getOnePlanet={getOnePlanet}
              planetImages={planetImages}
              getImageNASA={getImageNASA}
              // onPlanetIdChange={handlePlanetIdChange}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
