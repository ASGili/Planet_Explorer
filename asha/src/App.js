import NavBar from "./components/NavBar";
import HomeInfo from "./components/HomeInfo";
import PlanetList from "./components/PlanetList";
import PlanetSelector from "./components/PlanetSelector";
import PlanetService from "./services/PlanetService";
import { useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./app.css";


function App() {

  const [planets, setPlanets] = useState([])

  useEffect(()=> {
    PlanetService.getPlanets().then((allPlanets) => {
      setPlanets(allPlanets)
    })
  },[])

  return (
    <Router>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomeInfo/>} />
        <Route path="/planets" element={<PlanetList planets={planets}/>} />
        <Route path="/selector" element={<PlanetSelector/>} />
      </Routes>
    </Router>
  );
}

export default App;
