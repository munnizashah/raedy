import { motion } from "framer-motion";
import React from "react";
import Globe from "../globe/Globe";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <Globe />
      <div className="hero_headings">
        <motion.h1
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            ease: "backIn",
            duration: 1.5,
            delay: 0.5,
          }}
        >
          Raedy{" "}
        </motion.h1>
        <motion.h2
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            ease: "backIn",
            duration: 1.5,
            delay: 0.5,
          }}
        >
          Raedy to go
        </motion.h2>
      </div>
    </div>
  );
}

export default Hero;
