import React from 'react';

interface UtstyrProps {
    title: string;
}

const Utstyr: React.FC<UtstyrProps> = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
            {/* Add more content for the sub page as needed */}
        </div>
    );
}

export default Utstyr;
