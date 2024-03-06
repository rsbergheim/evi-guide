import {ContentContainer, ContentSection, ContentText, Page} from "../components/Page"
import {localizer} from "../localization";
import React from "react";
import {useLanguage} from "../hooks/useLanguage";
import "./Utstyr.css"


const Utstyr = () => {
    const {language} = useLanguage();

    return (
        <Page>
            <ContentContainer>
                <ContentSection>
                    <ContentText>
                        <h2>Ski</h2>
                        <p>{localizer(language, "eviskiDescription1")}</p>
                        <p>{localizer(language, "eviskiDescription2")}</p>
                        <p>{localizer(language, "eviskiDescription3")}</p>
                        <a href="https://www.eviski.com">eviski.com</a>
                    </ContentText>
                    <a href="https://www.eviski.com"><img className="utstyr-logo" src="/eviski_logo.png" alt="Evi ski"/></a>
                </ContentSection>
            </ContentContainer>
        </Page>
    );
}

export default Utstyr;
