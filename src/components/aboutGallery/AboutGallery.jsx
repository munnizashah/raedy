import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { aboutImage0, aboutImage2, aboutImage3 } from "../../seeder";
import "./aboutGallery.css";

function AboutGallery() {
  const gridRef = useRef(null);
  const activeImageRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    const images = Array.from(grid.querySelectorAll(".image"));

    images.forEach((image) => {
      image.addEventListener("click", handleClick);
    });

    function handleClick(e) {
      const clickedImage = e.currentTarget;

      if (clickedImage === activeImageRef.current) {
        // Clicked image is already active, close it
        closeImage();
      } else {
        // Open the clicked image
        openImage(clickedImage);
      }
    }

    function openImage(image) {
      // If there is an active image, close it first
      if (activeImageRef.current) {
        closeImage();
      }

      // Zoom out all other images except the clicked one
      gsap.to(
        images.filter((img) => img !== image),
        {
          duration: 0.3,
          scale: 0.8,
          opacity: 0.5,
        }
      );

      // Zoom in the clicked image
      gsap.to(image, {
        duration: 0.3,
        scale: 1.2,
        opacity: 1,
        zIndex: 1,
        onComplete: () => {
          // After the animation, set the clicked image as active
          activeImageRef.current = image;
          image.classList.add("activeImg");
          document.addEventListener("click", handleOutsideClick);
        },
      });
    }

    function closeImage() {
      const activeImage = activeImageRef.current;

      // Zoom out the active image
      gsap.to(activeImage, {
        duration: 0.3,
        y: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        zIndex: 1,
        onComplete: () => {
          // After the animation, reset the active image
          activeImageRef.current = null;
          activeImage.classList.remove("activeImg");
          document.removeEventListener("click", handleOutsideClick);
        },
      });

      // Zoom in all other images
      gsap.to(
        images.filter((img) => img !== activeImage),
        {
          duration: 0.3,
          scale: 1,
          opacity: 1,
        }
      );
    }

    function handleOutsideClick(e) {
      const clickedElement = e.target;

      // Close the active image if the click is outside the gallery
      if (!grid.contains(clickedElement)) {
        closeImage();
      }
    }

    return () => {
      images.forEach((image) => {
        image.removeEventListener("click", handleClick);
      });
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="gallery">
      <div className="grid" ref={gridRef}>
        <div className="image">
          <img src={aboutImage0} alt="basket 1" />
        </div>
        <div className="image">
          <img src={aboutImage2} alt="basket 2" />
        </div>
        <div className="image">
          <img src={aboutImage3} alt="basket 3" />
        </div>
        {/* Add more images here */}
      </div>
    </div>
  );
}

export default AboutGallery;
