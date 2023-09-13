import React from 'react';

const UserInterests = ({ interests }) => {
    return (
        <div className="mt-5">
            <h2>Géneros de videojuegos favoritos</h2>
            <ul>
                {interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserInterests;
