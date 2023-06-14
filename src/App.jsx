import React from "react";
import "./App.css";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Slideshow from "./components/slideshow/Slideshow";
import "./global.css";

function App() {
  return (
    <>
      <Hero />
      <About text="About" />
      <Slideshow />
    </>
  );
}

export default App;
