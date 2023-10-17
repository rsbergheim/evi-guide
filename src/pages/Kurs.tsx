import React from 'react';

interface KursProps {
    title: string;
}

const Kurs: React.FC<KursProps> = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
            {/* Add more content for the sub page as needed */}
        </div>
    );
}

export default Kurs;
