import React, {useEffect, useState} from 'react';
import TourCard, {Tour} from '../components/TourCard';
import {Page} from "../components/Page";
import "./Turer.css"

const Turer = () => {
    const [tours, setTours] = useState<Tour[]>([]);

    useEffect(() => {
        // Immediately Invoked Function Expression (IIFE) for async operations
        (async () => {
            let tourList = [];
            let i = 1;
            let keepFetching = true;

            while (keepFetching) {
                try {
                    const response = await fetch(`/turer/tour${i}.json`);
                    if (!response.ok) {
                        throw new Error('Tour not found');
                    }
                    const tourData = await response.json();
                    tourList.push(tourData);
                    i++;
                } catch (error) {
                    // Stop fetching when a file is not found or any error occurs
                    keepFetching = false;
                }
            }

            setTours(tourList);
        })();
    }, []);

    return (
        <Page isHomePage={false}>
            <div className="tour-grid">
                {tours.map((tour: Tour) => (
                    <TourCard key={tour.id} tour={tour}/>
                ))}
            </div>
        </Page>
    );
};

export default Turer;
