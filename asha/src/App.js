import NavBar from "./components/NavBar";
import HomeInfo from "./components/HomeInfo";
import PlanetList from "./components/PlanetList";
import PlanetSelector from "./components/PlanetSelector";
import PlanetService from "./services/PlanetService";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import "./app.css";
import PlanetDetail from "./components/PlanetDetail";

function App() {
  const [planets, setPlanets] = useState([]);
  const [onePlanet, setOnePlanet] = useState([]);
  // const [planetImages, setPlanetImages] = useState([]);

  useEffect(() => {
    PlanetService.getPlanets().then((allPlanets) => {
      setPlanets(allPlanets);
    });
  }, []);

  // useEffect(() => {
  //   const lowerCasePlanet = onePlanet.Planet;
  //   // console.log(typeof lowerCasePlanet)
  //   getImageNASA(lowerCasePlanet);
  // }, [onePlanet]);

  const getOnePlanet = (planetId) => {
    PlanetService.getPlanet(planetId).then((chosenPlanet) =>
      setOnePlanet(chosenPlanet)
    );
  };

  //API for numerous images. Currently not using.
  // const getImageNASA = (planet) => {
  //   const url = `https://images-api.nasa.gov/search?q=${planet}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((planetImg) => setPlanetImages(planetImg.collection));
  //   // console.log(planetImg)
  // };

  // chatGPT suggestion for preventing useEffect running twice. Did not work.
  // const handlePlanetIdChange = (planetId) => {
  //   // Handle the planetId change in App.js
  //   console.log("Selected Planet ID:", planetId);
  //   // Call the functions that depend on the planetId here
  //   getOnePlanet(planetId);
  // };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeInfo />} />
        <Route path="/planets" element={<PlanetList planets={planets} getOnePlanet={getOnePlanet}/>} />
        <Route path="/selector" element={<PlanetSelector planets={planets} />} />
        <Route
          path="/planets/:planetId"
          element={
            <PlanetDetail
              onePlanet={onePlanet}
              getOnePlanet={getOnePlanet}
            // planetImages={planetImages}
            // getImageNASA={getImageNASA}
            // onPlanetIdChange={handlePlanetIdChange}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
