import React from "react";

const Footer: React.FC = () => {
    return (
        <footer style={footerStyle}>
            <a href="/kontaktinfo">Kontaktinfo</a>
            <a href="/vilkar">Vilkår</a>
            <a href="https://www.instagram.com/eviguide/" target="_blank" rel="noopener noreferrer">
                <img src="/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://www.nortind.no" target="_blank" rel="noopener noreferrer">Nortind</a>
        </footer>
    );
}

const footerStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '10px 0',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 -3px 10px rgba(0, 0, 0, 0.1)'
};

export default Footer;
