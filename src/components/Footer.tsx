import React from "react";
import {useLanguage} from "../hooks/useLanguage";
import {Language} from "../localization/Languages";
import {localizer} from "../localization";

const Footer: React.FC = () => {
    const { language, setLanguage} = useLanguage();
    return (
        <footer style={footerStyle}>
            {/*
            <h1>{localizer(language, "aksepterBrukervilkaar")}</h1>
            <button>{localizer(language, "ja")}</button>
            <button>{localizer(language, "nei")}</button>
            */}
            <a style={anchorStyle} href="/kontaktinfo">{localizer(language, "kontaktinfo")}</a>
            <a style={anchorStyle} href="/vilkar">{localizer(language, "vilkår")}</a>
            <a style={anchorStyle} href="https://www.instagram.com/eviguide/" target="_blank" rel="noopener noreferrer">
                <img src="/instagram.svg" alt="Instagram" />
            </a>
            <a style={anchorStyle} href="https://www.nortind.no" target="_blank" rel="noopener noreferrer">Nortind</a>
        </footer>
    );
}

const footerStyle: React.CSSProperties = {
    position: 'static',
    bottom: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '20px 0',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 -3px 10px rgba(0, 0, 0, 0.1)'
};

const anchorStyle: React.CSSProperties = {
    color: 'black', // Assuming the text color should be white
    //fontWeight: 'bold', // If the text is bold
    textDecoration: 'none', // No underline by default
    fontSize: '1em', // Adjust the font size as necessary
};

export default Footer;
