import React from 'react';
import { Page } from "../components/Page"

const Home = () => {

    return (
        <Page>
            <div className="home">
                <img src="/eviguide_picture.jpeg" alt="Ski Landscape" className="image"/>
                {/* Add more content for the home page as needed */}
            </div>
        </Page>
    );
}

export default Home;
