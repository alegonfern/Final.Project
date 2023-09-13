import React from 'react';

const UserBadges = ({ badges }) => {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {badges.map((badge, index) => (
                <div key={index} className="d-flex flex-column align-items-center m-2">
                    <img src={badge.image} alt={badge.name} style={{ width: '150px', height: '150px' }} />
                    <p style={{ fontSize: '24px' }}>{badge.name}</p>
                </div>
            ))}
        </div>
    );
};

export default UserBadges;
