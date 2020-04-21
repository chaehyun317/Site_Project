import React from 'react';
import './Slider.css';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true
  } 
  
  const Slideshow11 = () => {
    return (
        <div className="j_slider">
          <Fade {...fadeProperties}>
              <div className="image-container img70"></div>
              <div className="image-container img71"></div>
              <div className="image-container img72"></div>
              <div className="image-container img73"></div>
              <div className="image-container img74"></div>
              <div className="image-container img75"></div>
          </Fade>
        </div>
      );
  };
  
  export default Slideshow11;