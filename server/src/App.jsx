import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Background from "./Components/Background/Background";
import MapComponent from "./Components/Map/Map";
import Hero from "./Components/Hero/Hero";
import Login from "./Components/Login/Login";  
import EditSitePopup from './Components/Editfield/editfield'

function App() {
  const heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Dive into", text2: "What you love" },
    { text1: "Dive into", text2: "What you love" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [siteData, setSiteData] = useState({
    siteName: 'LG Since park',
    sensorCount: 3,
    registerDate: '2025-01-01',
    registerBy: 'cindy.smith',
    latitude: '37.564119',
    longitude: '126.8278846'
  });

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleSave = (updatedData) => {
    setSiteData(updatedData);
    closePopup();
  };

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
        <div>
      <h1>Site Information</h1>
      <div>
        <p>Site Name: {siteData.siteName}</p>
        <p>Sensor Count: {siteData.sensorCount}</p>
        <p>Register Date: {siteData.registerDate}</p>
        <p>Register By: {siteData.registerBy}</p>
        <p>Latitude: {siteData.latitude}</p>
        <p>Longitude: {siteData.longitude}</p>
      </div>
      <button onClick={openPopup}>Edit Site</button>

      <EditSitePopup
        isOpen={isPopupOpen}
        onClose={closePopup}
        initialData={siteData}
        onSave={handleSave}
      />
    </div>
      </div>
    </Router>
  );
}

export default App;
