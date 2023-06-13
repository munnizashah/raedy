import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
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
