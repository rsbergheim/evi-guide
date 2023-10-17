import React from 'react';

const Home: React.FC = () => {
    return (
        <div style={homeStyle}>
            <img src="/eviguide_picture.png" alt="Ski Landscape" style={imageStyle}/>
            {/* Add more content for the home page as needed */}
        </div>
    );
}

const homeStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
};

const imageStyle: React.CSSProperties = {
    width: '100%',
    height: 'calc(100vh - 60px)', // Adjusting for header height
    objectFit: 'cover'
};

export default Home;
