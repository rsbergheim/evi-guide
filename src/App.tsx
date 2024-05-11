import React from 'react';
import AppRoutes from './AppRoutes';
import {BrowserRouter} from 'react-router-dom';
import {LanguageProvider} from './contexts/LanguageContext';
import { TinaProvider, TinaCMS } from 'tinacms';

const cms = new TinaCMS({
    sidebar: true
});

function App() {
    return (
        <TinaProvider cms={cms}>
            <BrowserRouter>
                <LanguageProvider>
                    <AppRoutes/>
                </LanguageProvider>
            </BrowserRouter>
        </TinaProvider>
    );
}

export default App;
