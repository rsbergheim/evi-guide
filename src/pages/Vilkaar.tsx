import { Page } from "../components/Page"
import {localizer} from "../localization";
import React from "react";
import {useLanguage} from "../hooks/useLanguage";
import "./Vilkaar.css"

const Vilkaar = () => {
    const {language} = useLanguage();

    return (
        <Page>
            <div className="vilkaar-container">
                <div className="vilkaar">
                    <div className="vilkaar-text">
                        <h1>{localizer(language, "vilkårHeading")}</h1>
                        <ul>
                            <li>{localizer(language, "vilkårPoint1")}</li>
                            <li>{localizer(language, "vilkårPoint2")}</li>
                            <li>{localizer(language, "vilkårPoint3")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Page>
    );
}

export default Vilkaar;
