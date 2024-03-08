import {Language} from "../localization/Language";
import {useLanguage} from "../hooks/useLanguage";
import React from "react";
import {localizer} from "../localization";
import {ContentSection, ContentText} from "./Page";

type LocalizedFields = {
    [key in Language]: string;
};

export type Course = {
    id: string;
    title: LocalizedFields;
    duration: LocalizedFields;
    description: LocalizedFields;
    bringEquipment: LocalizedFields;
    difficulty: LocalizedFields;
};

interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({course}) => {
    const {language} = useLanguage();

    const title = course.title[language];
    const duration = course.duration[language];
    const description = course.description[language];
    const bringEquipment = course.bringEquipment[language];
    const difficulty = course.difficulty[language];

    const createMailtoLink = (titleKey: string) => {
        const subject = encodeURIComponent(titleKey);
        const body = encodeURIComponent(
            localizer(language, "antallPersoner") + " \n" +
            localizer(language, "dato") + " \n" +
            localizer(language, "område") + " \n");
        return `mailto:info@eviguide.no?subject=${subject}&body=${body}`;
    };

    return (
        <ContentSection key={course.id}>
            <ContentText>
                <h2>{title}</h2>
                <p>{localizer(language, "lengde")}{duration}</p>
                <p>{description}</p>
                <p>{localizer(language, "utstyr")}: {bringEquipment}</p>
                <p>{localizer(language, "niva")}{difficulty}</p>
                <a href={createMailtoLink(title)}>
                    <button className="order-button">{localizer(language, "bestill")}</button>
                </a>
            </ContentText>
        </ContentSection>
    )
}

export default CourseCard;

