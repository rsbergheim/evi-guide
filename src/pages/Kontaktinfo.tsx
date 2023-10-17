import React from 'react';

interface KontaktinfoProps {
    title: string;
}

const Kontaktinfo: React.FC<KontaktinfoProps> = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
            {/* Add more content for the sub page as needed */}
        </div>
    );
}

export default Kontaktinfo;
