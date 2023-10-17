import React from 'react';

const Header: React.FC = () => {
    return (
        <div>
            <img src="path_to_your_logo" alt="Logo" />
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/turer">Turer</a></li>
                    <li><a href="/kurs">Kurs</a></li>
                    <li><a href="/utstyr">Utstyr</a></li>
                    <li><a href="/info">Info</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
