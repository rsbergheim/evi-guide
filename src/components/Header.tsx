import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={headerStyle}>
            <img src="/eviguide_logo.png" alt="Logo" />
            <ul style={navItemsStyle}>
                <li><a href="/">Home</a></li>
                <li><a href="/turer">Turer</a></li>
                <li><a href="/kurs">Kurs</a></li>
                <li><a href="/utstyr">Utstyr</a></li>
                <li><a href="/info">Info</a></li>
            </ul>
        </header>
    );
}

const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)'
};

const navItemsStyle: React.CSSProperties = {
    listStyle: 'none',
    display: 'flex',
    gap: '20px'
};


export default Header;
