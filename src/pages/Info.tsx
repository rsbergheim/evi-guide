import React from 'react';
import {
    ContentContainer,
    ContentSection,
    ContentText,
    Page
} from "../components/Page";
import {localizer} from "../localization";
import {useLanguage} from "../hooks/useLanguage";
import "./Info.css";

const Info = () => {
    const {language} = useLanguage();

    return (
        <Page>
            <ContentContainer>
                <ContentSection>
                    <ContentText>
                        <h1>EVI Guide</h1>
                        <p>{localizer(language, "homeDescription")}</p>
                    </ContentText>
                    <img className="profile-picture" src="/eviguide_logo.png" alt="EVI Guide"/>
                </ContentSection>
                <ContentSection>
                    <ContentText>
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
                    </ContentText>
                </ContentSection>
            </ContentContainer>
        </Page>
    );
};

export default Info;
