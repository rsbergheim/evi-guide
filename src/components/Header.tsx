import React, {useState} from 'react';
import {useLanguage} from "../hooks/useLanguage";
import {Language} from "../localization/Language";
import {localizer} from "../localization";
import './Header.css';

const Header: React.FC = () => {
    const {language, setLanguage} = useLanguage();
    const [isNavVisible, setIsNavVisible] = useState(false); // State to toggle the navigation visibility

    const handleBurgerClick = () => {
        setIsNavVisible(!isNavVisible); // Toggle navigation visibility
    };

    return (
        <header className={`header ${isNavVisible ? 'nav-visible' : ''}`}>
            <div className="logo-container">
                <img className="logo" src="/eviguide_logo.png" alt="Logo"/>
            </div>
            <div className="burger-container">
                <button className="burger" onClick={handleBurgerClick}>☰</button>
            </div>
            <nav className="nav-container">
                <ul className="nav-items">
                    <li><a className="anchor" 
                           href="/">{localizer(language, "hjem")}</a></li>
                    <li><a className="anchor" 
                           href="/turer">{localizer(language, "turer")}</a></li>
                    <li><a className="anchor" 
                           href="/kurs">{localizer(language, "kurs")}</a></li>
                    <li><a className="anchor" 
                           href="/utstyr">{localizer(language, "utstyr")}</a></li>
                    <li><a className="anchor" 
                           href="/info">{localizer(language, "info")}</a></li>
                </ul>
            </nav>
            <div className="language-toggle">
                <button className="language-button" onClick={() => setLanguage(Language.en)}>🇬🇧</button>
                <div className="language-separator">|</div>
                <button className="language-button" onClick={() => setLanguage(Language.no)}>🇳🇴</button>
            </div>
        </header>
    );
};

export default Header;
