import { motion } from "framer-motion";
import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slideshow.css";
import "./slideshowAnimations.css";

function Slideshow() {
  const content = [
    {
      title: "Basketball",
      description: "Team Raedy Basketball",
      image:
        "https://images.unsplash.com/photo-1518614368389-5160c0b0de72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMHBsYXlpbmclMjBiYXNrZXRiYWxsfGVufDB8fDB8fHww&w=1000&q=80",
    },
    {
      title: "Skills",
      description: "Skill Training",
      image:
        "https://raedy.se/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-22-at-1.01.05-PM.jpeg",
    },
    {
      title: "Skills",
      description: "Skill Training",
      image: "https://images.pexels.com/photos/3755451/pexels-photo-3755451.jpeg",
    },
  ];
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="sectionDivider"
      />

      <Slider className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default Slideshow;
