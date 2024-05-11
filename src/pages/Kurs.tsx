import React from 'react';
import { ContentContainer, Page } from "../components/Page";
import "./Kurs.css"
import CourseCard from "../components/CourseCard";
import useCourses from "../hooks/useCourses";

const Kurs = () => {
    const courses = useCourses();

    return (
        <Page>
            <ContentContainer>
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </ContentContainer>
        </Page>
    );
};

export default Kurs;
