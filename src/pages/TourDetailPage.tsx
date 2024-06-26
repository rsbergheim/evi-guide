import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useLanguage} from "../hooks/useLanguage";
import {MapContainer, TileLayer, Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, {LatLngExpression} from 'leaflet';
import {ContentContainer, ContentSectionVert, ContentText, Page} from "../components/Page";
import "./TourDetailPage.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

type TourDetail = {
    id: string;
    title: {
        en: string;
        no: string;
    };
    description: {
        en: string;
        no: string;
    };
    longDescription: {
        en: string;
        no: string;
    };
    image: string;
    difficulty: string;
    length: string;
    images: string[];
    mapCoordinates: {
        lat: number;
        lon: number;
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
                        console.error('Tour not found');
                        setTourDetail(null);
                        return;
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

    const position: LatLngExpression = [tourDetail.mapCoordinates.lat, tourDetail.mapCoordinates.lon];

    return (
        <Page isHomePage={false}>
            <ContentContainer>
                <ContentSectionVert>
                    <ContentText>
                        <h2>{tourDetail.title[language]}</h2>
                        {tourDetail.longDescription[language].split('\n').map((paragraph, index) => (
                            <p key={index} className="ContentText">{paragraph}</p>
                        ))}
                        <div>
                            {tourDetail.images.map((image, index) => (
                                <React.Fragment key={index}>
                                    <img className="illustrative-img" src={`/turer/images/${image}`}
                                         alt={`Detail of ${image}`}/>
                                    <p></p>
                                </React.Fragment>
                            ))}
                        </div>
                    </ContentText>
                    <MapContainer
                        center={position}
                        zoom={13}
                        scrollWheelZoom={false}
                        style={{height: "400px", width: "60%"}}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                        </Marker>
                    </MapContainer>
                </ContentSectionVert>
            </ContentContainer>
        </Page>
    );
};

export default TourDetailPage;
