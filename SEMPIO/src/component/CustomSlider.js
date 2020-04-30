import React from 'react';
import './Slider.css';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true
}

const CustomSlider = ({ imgs, label }) => {
    return (
        <div className={label}>
            <Fade {...fadeProperties}>
                {imgs.map(item => (
                    <div key={`SLIDE${item.id}`} className={`image-container ${item.className}`}></div>
                ))}
            </Fade>
        </div>
    );
};

export default CustomSlider;