import React from 'react';
import './BackgroundImage.css';

type BackgroundImageProps = {
    isHomePage?: boolean;
};

const BackgroundImage: React.FC<BackgroundImageProps> = ({isHomePage}) => {
    const className = isHomePage ? 'background-image home' : 'background-image other';
    return <div className={className}/>;
};

export default BackgroundImage;
