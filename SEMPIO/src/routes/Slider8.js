import React from 'react';
import './Slider.css';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true
  } 
  
  const Slideshow8 = () => {
    return (
        <div className="j_slider">
          <Fade {...fadeProperties}>
              <div className="image-container img49"></div>
              <div className="image-container img50"></div>
              <div className="image-container img51"></div>
              <div className="image-container img52"></div>
              <div className="image-container img53"></div>
              <div className="image-container img54"></div>
              <div className="image-container img55"></div>
              <div className="image-container img56"></div>
              <div className="image-container img57"></div>
              <div className="image-container img58"></div>
          </Fade>
        </div>
      );
  };
  
  export default Slideshow8;