import React from 'react';
import './Slider.css';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true
  } 
  
  const Slideshow5 = () => {
    return (
        <div className="r_slider">
          <Fade {...fadeProperties}>
              <div className="image-container img31"></div>
              <div className="image-container img32"></div>
              <div className="image-container img33"></div>
              <div className="image-container img34"></div>
              <div className="image-container img35"></div>
              <div className="image-container img36"></div>
              <div className="image-container img37"></div>
              <div className="image-container img38"></div>
          </Fade>
        </div>
      );
  };
  
  export default Slideshow5;