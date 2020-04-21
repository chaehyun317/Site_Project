import React from 'react';
import './Slider.css';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true
  } 
  
  const Slideshow9 = () => {
    return (
        <div className="j_slider">
          <Fade {...fadeProperties}>
              <div className="image-container img59"></div>
              <div className="image-container img60"></div>
              <div className="image-container img61"></div>
              <div className="image-container img62"></div>
              <div className="image-container img63"></div>
          </Fade>
        </div>
      );
  };
  
  export default Slideshow9;