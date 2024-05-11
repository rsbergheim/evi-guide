import React from "react";
import { ContentSection, ContentText } from "./Page";
import { useLanguage } from '../hooks/useLanguage';
import { localizer } from '../localization';
import {Course} from "../types/Course";

interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    const { language } = useLanguage();

    const createMailtoLink = (titleKey: string) => {
        const subject = encodeURIComponent(titleKey);
        const body = encodeURIComponent(
            localizer(language, "antallPersoner") + " \n" +
            localizer(language, "dato") + " \n" +
            localizer(language, "område") + " \n"
        );
        return `mailto:info@eviguide.no?subject=${subject}&body=${body}`;
    };

    return (
        <ContentSection>
            <ContentText>
                <h2>{course.title}</h2>
                <p>{localizer(language, "lengde")}: {course.duration}</p>
                <p>{course.description}</p>
                <p>{localizer(language, "utstyr")}: {course.bringEquipment}</p>
                <p>{localizer(language, "niva")}: {course.difficulty}</p>
                <a href={createMailtoLink(course.title)}>
                    <button className="order-button">{localizer(language, "bestill")}</button>
                </a>
            </ContentText>
        </ContentSection>
    );
};

export default CourseCard;
