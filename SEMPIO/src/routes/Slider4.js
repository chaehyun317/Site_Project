import React from 'react';
import './Slider.css';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true
  } 
  
  const Slideshow4 = () => {
    return (
        <div className="r_slider">
          <Fade {...fadeProperties}>
              <div className="image-container img21"></div>
              <div className="image-container img22"></div>
              <div className="image-container img23"></div>
              <div className="image-container img24"></div>
              <div className="image-container img25"></div>
              <div className="image-container img26"></div>
              <div className="image-container img27"></div>
              <div className="image-container img28"></div>
              <div className="image-container img29"></div>
              <div className="image-container img30"></div>
          </Fade>
        </div>
      );
  };
  
  export default Slideshow4;