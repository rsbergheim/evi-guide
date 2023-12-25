import { Page } from "../components/Page"
import {localizer} from "../localization";
import React from "react";
import {useLanguage} from "../hooks/useLanguage";
import "./Utstyr.css"


const Utstyr = () => {
    const {language} = useLanguage();

    return (
        <Page>
            <div className="utstyr-container">
                <div className="utstyr">
                    <div className="utstyr-text">
                        <h2>Ski</h2>
                        <p>{localizer(language, "eviskiDescription1")}</p>
                        <p>{localizer(language, "eviskiDescription2")}</p>
                        <p>{localizer(language, "eviskiDescription3")}</p>
                        <a href="https://www.eviski.com">eviski.com</a>
                    </div>
                    <a href="https://www.eviski.com"><img src="/eviski_logo.png" alt="Evi ski"/></a>
                </div>
            </div>
        </Page>
    );
}

export default Utstyr;
