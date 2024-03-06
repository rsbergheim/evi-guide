import {ContentContainer, ContentSection, ContentText, Page} from "../components/Page"
import {localizer} from "../localization";
import React from "react";
import {useLanguage} from "../hooks/useLanguage";

const Vilkaar = () => {
    const {language} = useLanguage();

    return (
        <Page>
            <ContentContainer>
                <ContentSection>
                    <ContentText>
                        <h1>{localizer(language, "vilkårHeading")}</h1>
                        <ul>
                            <li>{localizer(language, "vilkårPoint1")}</li>
                            <li>{localizer(language, "vilkårPoint2")}</li>
                            <li>{localizer(language, "vilkårPoint3")}</li>
                        </ul>
                    </ContentText>
                </ContentSection>
            </ContentContainer>
        </Page>
    );
}

export default Vilkaar;
