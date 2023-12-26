import React, {useEffect} from 'react';
import AppRoutes from './AppRoutes';
import {BrowserRouter} from 'react-router-dom';
import {LanguageProvider} from './contexts/LanguageContext';

function App() {
    useEffect(() => {
        // Check if the password has already been entered correctly
        if (!localStorage.getItem('passwordVerified')) {
            const hash = '17fdd280770ef98059200903fc7082ccd736c18f1a8785f7525c56b9f4f73b7e';
            const userPass = prompt('Enter the password to access this page:');

            if (userPass) {
                const hashedUserPass = new TextEncoder().encode(userPass);
                window.crypto.subtle.digest('SHA-256', hashedUserPass).then(digest => {
                    const hashArray = Array.from(new Uint8Array(digest));
                    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
                    if (hashHex === hash) {
                        // If the hash matches, set the flag in local storage
                        localStorage.setItem('passwordVerified', 'true');
                    } else {
                        // Incorrect password, navigate away
                        window.location.href = 'https://www.eviski.com/';
                    }
                });
            } else {
                // No password entered, navigate away
                window.location.href = 'https://www.eviski.com/';
            }
        }
    }, []);

    return (
        <BrowserRouter>
            <LanguageProvider>
                <AppRoutes/>
            </LanguageProvider>
        </BrowserRouter>
    );
}

export default App;
