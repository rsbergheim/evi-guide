import React from 'react';
import {Page} from "../components/Page";
import {localizer} from "../localization";
import {useLanguage} from "../hooks/useLanguage";
import "./Info.css";

const Info = () => {
    const {language} = useLanguage();

    return (
        <Page>
            <div className="info-container">
                <div className="info">
                    <div className="info-text">
                        <h1>Pål Røsrud</h1>
                        <p>{localizer(language, "pålDescription")}</p>
                    </div>
                    <img src="/paal.jpg" alt="Pål Røsrud"/>
                </div>
                <div className="info">
                    <div className="info-text">
                        <h2>{localizer(language, "kontaktinfoHeader")}</h2>
                        <p>
                            {localizer(language, "kontaktinfoDescription1")}
                        </p>
                        <p>
                            {localizer(language, "kontaktinfoDescription2")}
                            <a href="mailto:info@eviguide.no"> info@eviguide.no </a>
                            {localizer(language, "kontaktinfoDescription3")}
                            <a href="tel:(+47)97544091"> (+47) 97 54 40 91 </a>
                        </p>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default Info;
