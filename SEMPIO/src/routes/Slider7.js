import React from 'react';
import './Slider.css';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true
  } 
  
  const Slideshow7 = () => {
    return (
        <div className="j_slider">
          <Fade {...fadeProperties}>
              <div className="image-container img46"></div>
              <div className="image-container img47"></div>
              <div className="image-container img48"></div>
          </Fade>
        </div>
      );
  };
  
  export default Slideshow7;