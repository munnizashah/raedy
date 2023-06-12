import { motion } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import React, { useEffect, useState } from "react";
import readyIcon from "../../assets/icons/ready-cropped.png";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  // Add event listener for scroll on mount and remove on unmount
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const closeMenu = (e) => {
    e.preventDefault();
    setIsOpen(false);
    const audioEl = new Audio("whistleBlowing.mp3");
    audioEl.play();
  };

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, delay: 0.5 },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hover: {
      scale: 1.1,
      color: "#34D399",
      transition: { type: "spring", stiffness: 300, duration: 0.3 },
    },
    tap: { scale: 0.9 },
  };

  return (
    <div className="navbar">
      <div className="navbarlogoContainer">
        <a href="/">
          <img
            src={readyIcon}
            className="readyIcon"
            onClick={closeMenu}
            color={isOpen ? "#34D399" : "#ccc"}
            alt="readyIcon"
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
            <motion.li
              onClick={closeMenu}
              variants={menuItemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <a href="#home">Home</a>
            </motion.li>
            <motion.li
              onClick={closeMenu}
              variants={menuItemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <a href="#about">About</a>
            </motion.li>
            <motion.li
              onClick={closeMenu}
              variants={menuItemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <a href="#gallery">Gallery</a>
            </motion.li>
            <motion.li
              onClick={closeMenu}
              variants={menuItemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <a href="/">Shop</a>
            </motion.li>
            <motion.li
              onClick={closeMenu}
              variants={menuItemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <a href="/">Camps</a>
            </motion.li>
          </ul>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
