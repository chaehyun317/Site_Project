import React from 'react';
import './Slider.css';
import { Fade } from 'react-slideshow-image';

// const fadeImages = [
//   '/img/e_banner.jpg',
//   '/img/w_banner.jpg',
//   '/img/f_banner.jpg'
// ];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
} 

const Slideshow = () => {
  return (
      <div className="y_slider">
        <Fade {...fadeProperties}>
            <div className="image-container img1"></div>
            <div className="image-container img2"></div>
            <div className="image-container img3"></div>
            <div className="image-container img4"></div>
        </Fade>
      </div>
    );
};



export default Slideshow;