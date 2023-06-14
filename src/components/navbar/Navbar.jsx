import { motion } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import React, { useEffect, useRef, useState } from "react";
import { VscMute, VscUnmute } from "react-icons/vsc";
import "./navbar.css";

const readyIcon = "/assets/icons/ready-cropped.png";
const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay: 0.5 },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioEl = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setIsOpen(false);
    }
  };

  const handleAudio = () => {
    if (audioEl.current) {
      audioEl.current.muted = !audioEl.current.muted;
      setIsMuted(audioEl.current.muted);
    }
  };

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeMenu = () => {
    setIsOpen(false);
    audioEl.current.play();
  };

  useEffect(() => {
    window.addEventListener("load", () => setIsMuted(audioEl.current.muted));
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen && audioEl.current) {
      audioEl.current.play();
    }
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbarlogoContainer">
        <a href="#home">
          <img
            src={readyIcon}
            className="readyIcon"
            onClick={backToTop}
            alt="Logo to take user back to home"
          />
        </a>
        <button onClick={handleAudio}>{isMuted ? <VscMute /> : <VscUnmute />}</button>
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
        <motion.ul className="menu" variants={menuVariants} initial="hidden" animate="visible">
          <li onClick={closeMenu}>
            <a href="#home">Home</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#about">About</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#gallery">Gallery</a>
          </li>
        </motion.ul>
      </motion.nav>
      <audio ref={audioEl} src="/assets/sounds/theme_song.mp3" />
    </nav>
  );
};

export default Navbar;
