import React from "react";
import Globe from "./components/globe/Globe";
import './App.css'
import About from "./components/about/About";

function App() {
  return (
    <>
      <Globe />
      <About text="About" />
    </>
  );
}

export default App;
