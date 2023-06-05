import NavBar from "./components/NavBar";
import HomeInfo from "./components/HomeInfo";
import PlanetList from "./components/PlanetList";
import PlanetSelector from "./components/PlanetSelector";
import { useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./app.css";


function App() {

  const [planets, SetPlanets] = useState([])

  // useEffect(()=>{},[])

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
