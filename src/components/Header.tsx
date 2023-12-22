import React from 'react';
import {useLanguage} from "../hooks/useLanguage";
import {Language} from "../localization/Language";
import {localizer} from "../localization";

const Header: React.FC = () => {
    const { language, setLanguage} = useLanguage();

    // Function to handle mouse enter event
    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (typeof anchorHoverStyle.textDecoration === "string") {
            e.currentTarget.style.textDecoration = anchorHoverStyle.textDecoration;
        }
    };

    // Function to handle mouse leave event
    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.textDecoration = 'none';
    };

    return (
        <header>
            <div style={topBarStyle}>
                <a style={emailStyle} href="mailto:info@eviski.com" >{localizer(language, "epost")}</a>
            </div>
            <div style={headerStyle}>
                <div style={navItemsStyle}>
                    <img src="/eviguide_logo.png" alt="Logo" />
                    <ul style={navItemsStyle}>
                        <li><a style={anchorStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/">{localizer(language, "hjem")}</a></li>
                        <li><a style={anchorStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/turer">{localizer(language, "turer")}</a></li>
                        <li><a style={anchorStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/kurs">{localizer(language, "kurs")}</a></li>
                        <li><a style={anchorStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/utstyr">{localizer(language, "utstyr")}</a></li>
                        <li><a style={anchorStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/info">{localizer(language, "info")}</a></li>
                    </ul>
                </div>
                <div style={navItemsStyle}>
                    <button onClick={() => setLanguage(Language.en)}>🇬🇧</button>
                    <div>|</div>
                    <button onClick={() => setLanguage(Language.no)}>🇳🇴</button>
                    <div></div>
                </div>
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

const topBarStyle: React.CSSProperties = {
    backgroundColor: 'rgba(158, 12, 29, 1)',
    padding: '5px 40px',
}

const emailStyle: React.CSSProperties = {
    color: 'white', // Assuming the text color should be white
    fontWeight: 'bold', // If the text is bold
    textDecoration: 'none', // No underline by default
    fontSize: '1.1em', // Adjust the font size as necessary
}

const navItemsStyle: React.CSSProperties = {
    listStyle: 'none',
    display: 'flex',
    gap: '20px'
};

const anchorStyle: React.CSSProperties = {
    color: 'black', // Assuming the text color should be black
    fontWeight: 'bold', // If the text is bold
    textDecoration: 'none', // No underline by default
    fontSize: '1.25em', // Adjust the font size as necessary
};

// Define a hover style
const anchorHoverStyle: React.CSSProperties = {
    textDecoration: 'underline', // Or change color
};

export default Header;
