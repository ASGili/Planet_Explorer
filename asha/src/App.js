import NavBar from "./components/NavBar";
import HomeInfo from "./components/HomeInfo";
import PlanetList from "./components/PlanetList";
import PlanetSelector from "./components/PlanetSelector";
import PlanetService from "./services/PlanetService";
import { useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./app.css";
import PlanetDetail from "./components/PlanetDetail";


function App() {

  const [planets, setPlanets] = useState([])
  const [onePlanet, setOnePlanet] = useState([])

  useEffect(()=> {
    PlanetService.getPlanets().then((allPlanets) => {
      setPlanets(allPlanets)
    })
  },[])

  const getOnePlanet = (planetId) => {
    // console.log(planetId)
    PlanetService.getPlanet(planetId)
    .then(chosenPlanet => setOnePlanet(chosenPlanet))
  }

  return (
    <Router>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomeInfo/>} />
        <Route path="/planets" element={<PlanetList planets={planets}/>} />
        <Route path="/selector" element={<PlanetSelector planets={ planets } />} />
        <Route path="/planets/:planetId" element={<PlanetDetail onePlanet={onePlanet} getOnePlanet={getOnePlanet} />} />
      </Routes>
    </Router>
  );
}

export default App;
