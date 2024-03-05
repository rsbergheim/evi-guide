import React from 'react';
import {localizer} from "../localization";
import {useLanguage} from "../hooks/useLanguage";
import "./TourCard.css"
import {Language} from "../localization/Language";
import {useNavigate} from "react-router-dom";

type LocalizedFields = {
    [key in Language]: string;
};

export type TourDetailsLocalized = {
    longDescription: string;
    images: string[];
    mapCoordinates: {
        lat: number;
        lon: number;
    };
};

export type Tour = {
    id: string;
    title: LocalizedFields;
    description: LocalizedFields;
    image: string;
    difficulty: string;
    length: string;
};


interface TourCardProps {
    tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({tour}) => {
    const imagePath = require(`../../public/turer/images/${tour.image}`);
    const {language} = useLanguage();
    const navigate = useNavigate(); // Initialize useNavigate

    const title = tour.title[language];
    const description = tour.description[language];

    const handleSeeMoreClick = () => {
        navigate(`/turer/${tour.id}`); // Navigate to the tour detail page
    };

    return (
        <div className="card">
            <img src={imagePath} alt={title} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">{tour.length}</small></p>
                <button className="see-more-button" onClick={handleSeeMoreClick}>
                    {localizer(language, "lesMer")}
                </button>
            </div>
        </div>
    );
};

export default TourCard;
