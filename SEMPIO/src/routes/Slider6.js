import React from 'react';
import './Slider.css';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true
  } 
  
  const Slideshow6 = () => {
    return (
        <div className="j_slider">
          <Fade {...fadeProperties}>
              <div className="image-container img39"></div>
              <div className="image-container img40"></div>
              <div className="image-container img41"></div>
              <div className="image-container img42"></div>
              <div className="image-container img43"></div>
              <div className="image-container img44"></div>
              <div className="image-container img45"></div>
          </Fade>
        </div>
      );
  };
  
  export default Slideshow6;