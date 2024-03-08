import React, {useEffect, useState} from 'react';
import {ContentContainer, Page} from "../components/Page";
import "./Kurs.css"
import CourseCard, {Course} from "../components/CourseCard";

const Kurs = () => {
    const [courses, setCourses] = useState<Course[]>([]);


    useEffect(() => {
        (async () => {
            let courseList = [];
            let i = 1;
            let keepFetching = true;

            while (keepFetching) {
                try {
                    const response = await fetch(`/kurs/kurs${i}.json`);
                    if (!response.ok) {
                        console.log('Course not found');
                    }
                    const courseData = await response.json();
                    courseList.push(courseData);
                    i++;
                } catch (error) {
                    keepFetching = false;
                }
            }

            setCourses(courseList);
        })();
    }, []);

    return (
        <Page>
            <ContentContainer>
                {courses.map(course => (
                    <CourseCard key={course.id} course={course}/>
                ))}
            </ContentContainer>
        </Page>
    );
};

export default Kurs;
