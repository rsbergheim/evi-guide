import React from 'react';

interface InfoProps {
    title: string;
}

const Info: React.FC<InfoProps> = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
            {/* Add more content for the sub page as needed */}
        </div>
    );
}

export default Info;
