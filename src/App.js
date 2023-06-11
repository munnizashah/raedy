import React from "react";
import Globe from "./components/globe/Globe";
import "./App.css";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./global.css";
import Gallery from "./components/gallery/Gallery";
import FooterSection from "./components/footer/Footer";
import Slideshow from "./components/slideshow/Slideshow";


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
