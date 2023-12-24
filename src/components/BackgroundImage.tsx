import React from 'react';
import './BackgroundImage.css';

// @ts-ignore
const BackgroundImage = ({isHomePage}) => {
    const className = isHomePage ? 'background-image home' : 'background-image other';
    return <div className={className}/>;
};

export default BackgroundImage;
