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
  const [planets, setPlanets] = useState([]);
  const [onePlanet, setOnePlanet] = useState(null);
  const [planetImages, setPlanetImages] = useState(null);

  useEffect(() => {
    PlanetService.getPlanets().then((allPlanets) => {
      setPlanets(allPlanets);
    });
  }, []);

  // useEffect(() => {
  //   // const lowerCasePlanet = onePlanet.Planet;
  //   // console.log(typeof lowerCasePlanet)
  //   getImageNASA(lowerCasePlanet);
  // }, []);

  const getOnePlanet = (planetId) => {
    PlanetService.getPlanet(planetId).then((chosenPlanet) =>
      setOnePlanet(chosenPlanet)
    );
  };

  const createPlanet = (formOutput) => {
    PlanetService.addPlanet(formOutput)
    .then( () => PlanetService.getPlanets()
    .then((allPlanets) => {setPlanets(allPlanets)})
    )
  }


  // API for numerous images. Currently not using.
  const getImageNASA = (planet) => {
    const url = `https://images-api.nasa.gov/search?q=${planet}&media_type=image`;
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
