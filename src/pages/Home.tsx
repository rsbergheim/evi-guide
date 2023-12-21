import React from 'react';
import { Page } from "../components/Page"
import { useLanguage } from '../hooks/useLanguage';
import { localizer } from '../localization';

const Home = () => {

    return (
        <Page>
            <div style={homeStyle}>
                <img src="/eviguide_picture.png" alt="Ski Landscape" style={imageStyle}/>
                {/* Add more content for the home page as needed */}
            </div>
        </Page>
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
