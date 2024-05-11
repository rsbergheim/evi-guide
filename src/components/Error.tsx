import {ContentContainer, ContentSection, Page} from "./Page";
import React from "react";

const Error = () => {

    return (
        <Page>
            <ContentContainer>
                <ContentSection>
                    <div>Her var det ikke noe innhold! Sjekk kart og kompass</div>
                </ContentSection>
            </ContentContainer>
        </Page>
    );
};

export default Error;