
/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
// import { FaRegTimesCircle } from "react-icons/fa";
import { motion } from "framer-motion";
/* import Image from "react-image"; */

const Gallery = ({ text }) => {
  const gridRef = useRef(null);
  const activeImageRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageSrc, setActiveImageSrc] = useState("");
  const overlayRef = useRef(null);

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

  useEffect(() => {
    const grid = gridRef.current;
    const images = Array.from(grid.querySelectorAll(".image"));

    const openImage = (image) => {
      setIsModalOpen(true);
      setActiveImageSrc(image.querySelector("img").src);

      if (activeImageRef.current) {
        closeImage();
      }

      gsap.to(
        images.filter((img) => img !== image),
        {
          duration: 0.3,
          scale: 0.9,
          opacity: 0.5,
        }
      );

      gsap.to(image, {
        duration: 0.3,
        scale: 1,
        opacity: 1,
        zIndex: 1,
        onComplete: () => {
          activeImageRef.current = image;
          image.classList.add("active");
          document.addEventListener("click", handleOutsideClick);
        },
      });
    };

    const closeImage = () => {
      setIsModalOpen(false);
      setActiveImageSrc("");

      const activeImage = activeImageRef.current;
      gsap.to(activeImage, {
        duration: 0.3,
        scale: 1,
        opacity: 1,
        zIndex: 0,
        onComplete: () => {
          activeImageRef.current = null;
          activeImage.classList.remove("active");
          document.removeEventListener("click", handleOutsideClick);
        },
      });

      gsap.to(
        images.filter((img) => img !== activeImage),
        {
          duration: 0.3,
          scale: 1,
          opacity: 1,
        }
      );
    };

    const handleOutsideClick = (e) => {
      const clickedElement = e.target;
      if (!grid.contains(clickedElement)) {
        closeImage();
      }
    };

    const handleClick = (e) => {
      const clickedImage = e.currentTarget;
      if (clickedImage === activeImageRef.current) {
        closeImage();
      } else {
        openImage(clickedImage);
      }
    };

    const handleResize = () => {
      if (activeImageRef.current) {
        closeImage();
      }
    };

    images.forEach((image) => {
      image.addEventListener("click", handleClick);
    });

    window.addEventListener("resize", handleResize);

    return () => {
      images.forEach((image) => {
        image.removeEventListener("click", handleClick);
      });
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (isModalOpen) {
      gsap.to(overlay, {
        duration: 0.3,
        opacity: 1,
        pointerEvents: "auto",
      });
    } else {
      gsap.to(overlay, {
        duration: 0.3,
        opacity: 0,
        pointerEvents: "none",
      });
    }
  }, [isModalOpen]);

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="sectionDivider"
      />
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="gallery"
      >
        <div className="wrapper">
          <motion.div className="aboutHeading">
            <motion.h1
              className="aboutHeadline"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {words.map((word, index) => (
                <motion.span variants={child} key={index}>
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>
          <div className="imageGrid" ref={gridRef}>
            {[...Array(9)].map((_, i) => (
              <div key={i} className="image">
                <Image
                  src={`../../assets/images/about${i}.jpg`}
                  alt={`image${i}`}
                />
              </div>
            ))}
          </div>
          <div className="modalOverlay" ref={overlayRef}>
            {isModalOpen && (
              <div className="modalContent">
                {/* <FaRegTimesCircle /> */}
                <img src={activeImageSrc} alt="Active Image" />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Gallery;
