import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Slideshow from "./components/slideshow/Slideshow";
import "./global.css";

function App() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About text="About" />
      </section>
      <section id="gallery">
        <Slideshow />
      </section>
    </>
  );
}

export default App;
