import React, {useState} from 'react';
import {useLanguage} from "../hooks/useLanguage";
import {Language} from "../localization/Language";
import {localizer} from "../localization";
import './Header.css'; // Import the new CSS file

const Header: React.FC = () => {
    const {language, setLanguage} = useLanguage();
    const [isNavVisible, setIsNavVisible] = useState(false); // State to toggle the navigation visibility


    // Function to handle mouse enter event
    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.textDecoration = 'underline';
    };

    // Function to handle mouse leave event
    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.textDecoration = 'none';
    };

    const handleBurgerClick = () => {
        setIsNavVisible(!isNavVisible); // Toggle navigation visibility
    };

    return (
        <>
            <div className="top-bar">
                <a className="email" href="mailto:info@eviski.com">{localizer(language, "epost")}</a>
                <button className="burger" onClick={handleBurgerClick}>☰</button>
                {/* Burger icon */}
            </div>
            <header className={`header ${isNavVisible ? 'nav-visible' : ''}`}>
                <div className="logo-container">
                    <img className="logo" src="/eviguide_logo.png" alt="Logo"/>
                </div>
                <nav className="nav-container">
                    <ul className="nav-items">
                        <li><a className="anchor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/">{localizer(language, "hjem")}</a></li>
                        <li><a className="anchor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/turer">{localizer(language, "turer")}</a></li>
                        <li><a className="anchor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/kurs">{localizer(language, "kurs")}</a></li>
                        <li><a className="anchor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/utstyr">{localizer(language, "utstyr")}</a></li>
                        <li><a className="anchor" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/info">{localizer(language, "info")}</a></li>
                    </ul>
                </nav>
                <div className="language-toggle">
                    <button className="language-button" onClick={() => setLanguage(Language.en)}>🇬🇧</button>
                    <div className="language-separator">|</div>
                    <button className="language-button" onClick={() => setLanguage(Language.no)}>🇳🇴</button>
                </div>
            </header>
        </>
    );
};

export default Header;
