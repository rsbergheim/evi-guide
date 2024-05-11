import { useState, useEffect } from 'react';
import { useLanguage } from './useLanguage';
import matter from 'gray-matter';
import { Course } from '../types/Course';

const useCourses = () => {
    const { language } = useLanguage();
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        const fetchCourses = async () => {
            let coursesFetched: Course[] = [];
            let i = 1; // Start at 1 assuming the first course is kurs1.md

            let keepFetching = true;
            while (keepFetching) {
                const path = `kurs${i}.md`;
                try {
                    const response = await fetch(`/content/kurs/${language}/${path}`);
                    if (!response.ok) {
                        keepFetching = false;
                        continue;
                    }
                    const text = await response.text();
                    const { data } = matter(text);
                    coursesFetched.push({
                        id: data.kurs.id, // Access nested properties safely
                        title: data.kurs.title,
                        duration: data.kurs.duration,
                        description: data.kurs.description,
                        bringEquipment: data.kurs.bringEquipment,
                        difficulty: data.kurs.difficulty
                    } as Course);
                    i++;
                } catch (error) {
                    console.error('Error fetching course:', error);
                    keepFetching = false; // Stop on any error
                }
            }

            setCourses(coursesFetched);
        };

        fetchCourses();
    }, [language]);

    return courses;
};

export default useCourses;
