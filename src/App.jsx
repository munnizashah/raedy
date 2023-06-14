import React from "react";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Slideshow from "./components/slideshow/Slideshow";

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
