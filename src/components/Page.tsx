import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import BackgroundImage from "./BackgroundImage";
import "./Page.css"
import styled from 'styled-components';

export type PageProps = {
    children: React.ReactNode;
    isHomePage?: boolean;
}

function Page({children, isHomePage}: Readonly<PageProps>) {
    return (
        <div id="root">
            <Header/>
            {isHomePage && <BackgroundImage isHomePage={isHomePage}/>}
            <MainContent>
                {!isHomePage && <BackgroundImage isHomePage={isHomePage}/>}
                {children}
            </MainContent>
            <Footer/>
        </div>
    );
}

// Main content area where children components are rendered
const MainContent = styled.main`
    flex: 1 0 auto;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

// Container for content to create contrast to background
const ContentContainer = styled.div`
    max-width: 1000px; /* Adjusted max-width */
    margin: 0 auto; /* Center the container */
    opacity: 0.8;
    display: flex; /* Use flexbox to layout children */
    flex-direction: column; /* Stack children vertically */
    align-items: center; /* Center children horizontally */
    padding: 20px; /* Add some padding */
`;

// Section block for grouping related content within MainContent
const ContentSection = styled.div`
    display: flex;
    padding: 20px;
    width: 100%;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

// Section block for grouping related content within MainContent
const ContentSectionVert = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
`;

// Textual content within a ContentSection
const ContentText = styled.div`
    flex: 1;
    margin-right: 20px;
`;

export {MainContent, ContentContainer, ContentSection, ContentSectionVert, ContentText, Page};
