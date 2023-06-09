import React from 'react'
import "./Hero.css"
import { motion } from "framer-motion"


function Hero() {
  return (
    <div class="hero">
      <div class="hero_main_heading">
       <motion.h1
       className="hero_main_heading_h1"
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
        className='hero_main_heading_h2'
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
  )
}

export default Hero