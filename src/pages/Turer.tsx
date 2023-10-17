import React from 'react';

interface TurerProps {
    title: string;
}

const Turer: React.FC<TurerProps> = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
            {/* Add more content for the sub page as needed */}
        </div>
    );
}

export default Turer;
