import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Background from "./Components/Background/Background";
import MapComponent from "./Components/Map/Map";
import Hero from "./Components/Hero/Hero";
import Login from "./Components/Login/Login";  

function App() {
  const heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Dive into", text2: "What you love" },
    { text1: "Dive into", text2: "What you love" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <Router> 
      <div className="App">
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Navbar />
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />
        <Routes>
          <Route path="/map" element={<MapComponent />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
