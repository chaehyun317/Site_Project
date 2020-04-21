import React from 'react';
import './Slider.css';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true
  } 
  
  const Slideshow10 = () => {
    return (
        <div className="j_slider">
          <Fade {...fadeProperties}>
              <div className="image-container img64"></div>
              <div className="image-container img65"></div>
              <div className="image-container img66"></div>
              <div className="image-container img67"></div>
              <div className="image-container img68"></div>
              <div className="image-container img69"></div>
          </Fade>
        </div>
      );
  };
  
  export default Slideshow10;