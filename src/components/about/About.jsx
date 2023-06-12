import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./about.css";
import AboutGallery from "../aboutGallery/Gallery";

const About = ({ text }) => {
  const words = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.01 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
      },
    },
  };

  return (
    <>
      <motion.div className="sectionDivider" />
      <motion.div className="aboutSection">
        <div className="wrapper">
          <motion.div className="aboutHeading">
            <motion.h1
              variants={container}
              initial="hidden"
              whileInView="visible"
            >
              {words.map((word, index) => (
                <motion.span variants={child} key={index}>
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          <motion.div className="textSection">
            <motion.div className="ImageSection">
              <AboutGallery />
            </motion.div>
            <motion.p
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: -25,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            >
              RAEDY CAMP™ is a training camp designed by professional basketball
              player Thomas Massamba. It aims to help young basketball players
              elevate their skills and overall growth. With over ten years of
              experience in European professional basketball, Thomas
              incorporates technical expertise, life experience, and holistic
              well-being into the camp. RAEDY CAMP™ emphasizes personal
              development, focusing on physical fitness, diet, mental
              well-being, including yoga and mindfulness. The camp aims to
              nurture both players and individuals, fostering skills,
              performance, resilience, and confidence. At RAEDY CAMP™, they
              believe in unleashing each participant full potential through
              dedication and opportunity. With their unwavering commitment, they
              promise to support participants who wholeheartedly invest in the
              camp. Join RAEDY CAMP™ and become part of the RAEDY community.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
