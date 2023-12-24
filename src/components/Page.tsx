import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import BackgroundImage from "./BackgroundImage";
import "./Page.css"

export type PageProps = {
    children: React.ReactNode;
    isHomePage?: boolean;
}

function Page({children, isHomePage}: Readonly<PageProps>) {
    return (
        <div id="root">
            <Header/>
            {isHomePage && <BackgroundImage isHomePage={isHomePage}/>}
            <main className="content">
                {!isHomePage && <BackgroundImage isHomePage={isHomePage}/>}
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export { Page };
