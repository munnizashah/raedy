import { motion } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import React, { useCallback, useEffect, useState } from "react";
import readyIcon from "../../assets/icons/ready-cropped.png";
import "./navbar.css";

const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay: 0.5 },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const audioEl = new Audio("whistleBlowing.mp3");

  const handleScroll = useCallback(() => {
    if (window.scrollY > 1) {
      setIsOpen(false);
    }
  }, []);

  // Add event listener for scroll on mount and remove on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="navbar">
      <div className="navbarlogoContainer">
        <a href="#home">
          <img
            src={readyIcon}
            className="readyIcon"
            onClick={() => {
              closeMenu();
              audioEl.play();
            }}
            color={isOpen ? "#34D399" : "#ccc"}
            alt="Logo to take user back to home"
          />
        </a>
      </div>

      <div className="navbarBurgerContainer">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color={isOpen ? "#34D399" : "#ccc"}
          size={40}
        />
      </div>
      <motion.nav
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "100vh" : 0,
          opacity: isOpen ? 0.9 : 0,
        }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
        style={{
          zIndex: 10,
        }}
      >
        <motion.div className="menu" variants={menuVariants} initial="hidden" animate="visible">
          <ul>
            <li onClick={closeMenu}>
              <a href="#home">Home</a>
            </li>
            <li onClick={closeMenu}>
              <a href="#about">About</a>
            </li>
            <li onClick={closeMenu}>
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
