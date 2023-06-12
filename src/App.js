import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Slideshow from "./components/Hero/slideshow/Slideshow";
import About from "./components/about/About";
import FooterSection from "./components/footer/Footer";
import Globe from "./components/globe/Globe";
import Navbar from "./components/navbar/Navbar";
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
