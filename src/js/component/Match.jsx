import React from 'react';
import '../../styles/Match.css';



function Match() {
    const randomImage1 = `https://picsum.photos/seed/${Math.random()}/100`;
    const randomImage2 = `https://picsum.photos/seed/${Math.random()}/100`;

    return (
        <div className="match-screen">
            <h1>ADN MATCH!</h1>
            <div className="profile-pictures">
                <img src={randomImage1} alt="Gamer 1" />
                <img src="joystick.png" alt="Joystick" />
                <img src={randomImage2} alt="Gamer 2" />
            </div>
            <button>Send a Message</button>
            <button>Keep Playing</button>
        </div>
    );
}

export default Match;
