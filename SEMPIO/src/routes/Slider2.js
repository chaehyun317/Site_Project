import React from 'react';
import './Slider.css';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true
  } 
  
  const Slideshow2 = () => {
    return (
        <div className="y_slider">
          <Fade {...fadeProperties}>
              <div className="image-container img5"></div>
              <div className="image-container img6"></div>
              <div className="image-container img7"></div>
              <div className="image-container img8"></div>
              <div className="image-container img9"></div>
              <div className="image-container img10"></div>
              <div className="image-container img11"></div>
              <div className="image-container img12"></div>
              <div className="image-container img13"></div>
              <div className="image-container img14"></div>
          </Fade>
        </div>
      );
  };
  
  export default Slideshow2;