import React from 'react';
import './Slider.css';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true
  } 
  
  const Slideshow3 = () => {
    return (
        <div className="r_slider">
          <Fade {...fadeProperties}>
              <div className="image-container img15"></div>
              <div className="image-container img16"></div>
              <div className="image-container img17"></div>
              <div className="image-container img18"></div>
              <div className="image-container img19"></div>
              <div className="image-container img20"></div>
          </Fade>
        </div>
      );
  };
  
  export default Slideshow3;