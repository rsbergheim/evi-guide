import React from 'react';
import {Page} from "../components/Page";
import "./Home.css";
import {localizer} from "../localization";
import {useLanguage} from "../hooks/useLanguage";

const Home = () => {
    const {language} = useLanguage();

    return (
        <Page isHomePage>
            {/* Background image should have its own div if it's absolutely positioned */}
            <div className="home-container">
                <div className="home-text">
                    <h1>EVI Guide</h1>
                    <p>{localizer(language, "homeDescription")}</p>
                    <p>{localizer(language, "pålDescription")}</p>
                </div>
                <img className="logo-signature" src="/eviguide_logo.png" alt="Evi Guide"/>
            </div>
        </Page>
    );
};

export default Home;
