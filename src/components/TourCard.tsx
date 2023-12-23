import React from 'react';
import {localizer} from "../localization";
import {useLanguage} from "../hooks/useLanguage";
import "./TourCard.css"

export type Tour = {
    id: string;
    title: string;
    description: string;
    image: string;
    difficulty: string;
    length: string;
};

interface TourCardProps {
    tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({tour}) => {
    // Dynamically require the image based on the image filename in the tour data
    const imagePath = require(`../../public/turer/images/${tour.image}`);
    const {language} = useLanguage();

    return (
        <div className="card">
            <img src={imagePath} alt={tour.title} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{tour.title}</h5>
                <p className="card-text">{tour.description}</p>
                <p className="card-text"><small className="text-muted">{tour.length}</small></p>
                <button className="see-more-button">{localizer(language, "lesMer")}</button>
                {/* You could add more details like an embedded map here */}
            </div>
        </div>
    );
};

export default TourCard;
