import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useLanguage} from "../hooks/useLanguage";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {ContentContainer, ContentSection, ContentText, Page} from "../components/Page";
import "./Info.css";

type LocalizedDetails = {
    longDescription: string;
    images: string[];
    mapCoordinates: {
        lat: number;
        lon: number;
    };
};

type TourDetail = {
    id: string;
    title: {
        en: string;
        no: string;
    };
    details: {
        en: LocalizedDetails;
        no: LocalizedDetails;
    };
};

const TourDetailPage: React.FC = () => {
    const {tourId} = useParams();
    const {language} = useLanguage();
    const [tourDetail, setTourDetail] = useState<TourDetail | null>(null);

    useEffect(() => {
        const fetchTourDetail = async () => {
            if (tourId) {
                try {
                    const response = await fetch(`/turer/${tourId}.json`);
                    if (!response.ok) {
                        throw new Error('Tour not found');
                    }
                    const data = await response.json();
                    setTourDetail(data);
                } catch (error) {
                    console.error("Failed to fetch tour details", error);
                }
            }
        };

        fetchTourDetail();
    }, [tourId]);

    if (!tourDetail) {
        return <div>Loading tour details...</div>;
    }

    // Accessing `details` based on the current language
    const details = tourDetail.details[language];
    const position = [details.mapCoordinates.lat, details.mapCoordinates.lon];

    return (
        <Page isHomePage={false}>
            <ContentContainer>
                <ContentSection>
                    <ContentText>
                        <h2>{tourDetail.title[language]}</h2>
                        <p>{details.longDescription}</p>
                        {details.images.map((image) => (
                            <img key={image} src={`../../public/turer/images/${image}`} alt={`Detail of ${image}`}/>
                        ))}
                    </ContentText>
                    <MapContainer style={{height: "400px", width: "100%"}}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br/> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </ContentSection>
            </ContentContainer>
        </Page>
    );
};

export default TourDetailPage;
