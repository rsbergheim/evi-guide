import React from 'react';

interface VilkaarProps {
    title: string;
}

const Vilkaar: React.FC<VilkaarProps> = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
            {/* Add more content for the sub-page as needed */}
        </div>
    );
}

export default Vilkaar;
