import React from 'react'
import Slider from "react-animated-slider"
import 'react-animated-slider/build/horizontal.css'
import "./gallery.css"

function Gallery() {
  const content = [
    {
      title:"Team work is the goal",
      description:"Challenge yourself to new heights",
      image: "https://raedy.se/wp-content/uploads/2019/12/T-mass-RAEDY-20191030-IMG_7435-600x400.jpg",
    },
    {
      title:"Team work is the goal",
      description:"Challenge yourself to new heights",
      image: "https://raedy.se/wp-content/uploads/2019/12/T-mass-RAEDY-20191030-IMG_7301-600x400.jpg",
    },
    {
      title:"Team work is the goal",
      description:"Challenge yourself to new heights",
      image: "https://raedy.se/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-22-at-1.01.05-PM-600x400.jpeg",
    },
  ];
  return (
    <div className="slider-container">
      <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}   
          style={{ background: `url('${item.image}') no-repeat center center` }}>
          <div className="center">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  )
}

export default Gallery