import React, {useState} from "react";
import {useLanguage} from "../hooks/useLanguage";
import {localizer} from "../localization";
import './Footer.css'
import {Language} from "../localization/Language";

const Modal: React.FC<{ onClose: () => void, language: Language }> = ({onClose, language}) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {/* Display terms of use content here */}
                <h1>{localizer(language, "aksepterBrukervilkaar")}</h1>
                <button onClick={onClose}>{localizer(language, "ja")}</button>
                <button onClick={onClose}>{localizer(language, "nei")}</button>
            </div>
        </div>
    );
};

const Footer: React.FC = () => {
    const {language} = useLanguage();
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {showModal && <Modal onClose={() => setShowModal(false)} language={language}/>}
            <footer className="footer">
                    <a className="anchor" href="/info">{localizer(language, "kontaktinfo")}</a>
                    <a className="anchor" href="/vilkaar">{localizer(language, "vilkår")}</a>
                    <a className="anchor" href="https://www.instagram.com/eviguide/" target="_blank"
                       rel="noopener noreferrer">
                        <img src="/instagram.svg" alt="Instagram"/>
                    </a>
                    <a className="anchor" href="https://www.nortind.no" target="_blank"
                       rel="noopener noreferrer">Nortind</a>
                    <a className="anchor" href="https://www.varsom.no/snoskred/varsling/varsel/Trollheimen/" target="_blank"
                       rel="noopener noreferrer">Varsom</a>
            </footer>
        </>
    );
}

export default Footer;
