import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Background from "./Components/Background/Background";
import Hero from "./Components/Hero/Hero";

function App() {
  const heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Dive into", text2: "What you love" },
    { text1: "Dive into", text2: "What you love" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
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
    </div>
  );
}

export default App;
