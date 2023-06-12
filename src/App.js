import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import FooterSection from "./components/footer/Footer";
import Globe from "./components/globe/Globe";
import Navbar from "./components/navbar/Navbar";
import Slideshow from "./components/slideshow/Slideshow";
import "./global.css";

function App() {
  return (
    <>
      <Hero />
      <Navbar />
      <Globe />
      <About text="About" />
      <Slideshow />
      {/* <Gallery text="gallery" /> */}
      <FooterSection />
    </>
  );
}

export default App;
