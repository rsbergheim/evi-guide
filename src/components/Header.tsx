import React from 'react';
import {useLanguage} from "../hooks/useLanguage";
import {Language} from "../localization/Languages";
import {localizer} from "../localization";

const Header: React.FC = () => {
    const { language, setLanguage} = useLanguage();

    return (
        <header style={headerStyle}>
            <img src="/eviguide_logo.png" alt="Logo" />
            <ul style={navItemsStyle}>
                <li><a style={anchorStyle} href="/">{localizer(language, "hjem")}</a></li>
                <li><a style={anchorStyle} href="/turer">{localizer(language, "turer")}</a></li>
                <li><a style={anchorStyle} href="/kurs">{localizer(language, "kurs")}</a></li>
                <li><a style={anchorStyle} href="/utstyr">{localizer(language, "utstyr")}</a></li>
                <li><a style={anchorStyle} href="/info">{localizer(language, "info")}</a></li>
            </ul>
            <div style={navItemsStyle}>
                <div onClick={() => setLanguage(Language.en)}>🇬🇧</div>
                <div>|</div>
                <div onClick={() => setLanguage(Language.no)}>🇳🇴</div>
                <div></div>
            </div>
        </header>
    );
}

const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)'
};

const navItemsStyle: React.CSSProperties = {
    listStyle: 'none',
    display: 'flex',
    gap: '20px'
};

const anchorStyle: React.CSSProperties = {
    color: 'black', // Assuming the text color should be white
    fontWeight: 'bold', // If the text is bold
    textDecoration: 'none', // No underline by default
    fontSize: '1.25em', // Adjust the font size as necessary
};

export default Header;
