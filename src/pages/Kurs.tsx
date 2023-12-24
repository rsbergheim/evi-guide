import React from 'react';
import {Page} from "../components/Page";
import {useLanguage} from "../hooks/useLanguage"; // Assuming this hook provides the current language and a function to set it
import {localizer} from "../localization"; // Assuming this function handles the localization
import Localization from "../localization/localization"; // Import the Localization interface
import "./Kurs.css"

const coursesData: {
    id: string;
    titleKey: keyof Localization;
    descriptionKey: keyof Localization;
}[] = [
    {
        id: 'beginner-level',
        titleKey: 'beginnerLevelTitle',
        descriptionKey: 'beginnerLevelDescription',
    },
    {
        id: 'expert-level',
        titleKey: 'expertLevelTitle',
        descriptionKey: 'expertLevelDescription',
    },
    {
        id: 'guided-tours',
        titleKey: 'guidedToursTitle',
        descriptionKey: 'guidedToursDescription',
    },
    {
        id: 'backcountry-skiing-tours',
        titleKey: 'backcountrySkiingToursTitle',
        descriptionKey: 'backcountrySkiingToursDescription',
    },
    {
        id: 'freeskiing-school',
        titleKey: 'freeskiingSchoolTitle',
        descriptionKey: 'freeskiingSchoolDescription',
    },
    {
        id: 'glacier-tours',
        titleKey: 'glacierToursTitle',
        descriptionKey: 'glacierToursDescription',
    },
    // ... add more courses as needed
];

const Kurs = () => {
    const {language} = useLanguage(); // Use the language state from the context

    const createMailtoLink = (titleKey: keyof Localization) => {
        const subject = encodeURIComponent(localizer(language, titleKey));
        const body = encodeURIComponent(
            localizer(language, "antallPersoner") + " \n" +
            localizer(language, "dato") + " \n" +
            localizer(language, "område") + " \n");
        return `mailto:info@eviski.com?subject=${subject}&body=${body}`;
    };


    return (
        <Page>
            <div className="kurs-container">
                {coursesData.map(course => (
                    <div key={course.id} className="course">
                        <h2>{localizer(language, course.titleKey)}</h2>
                        <p>{localizer(language, course.descriptionKey)}</p>
                        <a href={createMailtoLink(course.titleKey)}>
                            <button className="order-button">{localizer(language, "bestill")}</button>
                        </a>
                        {/* Add a button or link to course details if necessary */}
                    </div>
                ))}
            </div>
        </Page>
    );
};

export default Kurs;
