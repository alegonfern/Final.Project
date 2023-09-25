import React from 'react';
import GroupHeader from './GroupHeader'
import GroupCards from './GroupCards'
import GroupWall from './GroupWall'
import GroupNewsCarousel from './GroupNewsCarousel'
import MatchCarousel from '../match/MatchCarousel';

const Group = (selectedGenre) => {

    const gamesByGenre = {
        'Acción': ['Call of Duty', 'Battlefield', 'Doom', 'Halo', 'Gears of War'],
        'Aventura': ['The Legend of Zelda', 'Uncharted', 'Tomb Raider', "Assassin's Creed", 'Horizon Zero Dawn'],
        'Estrategia': ['Civilization', 'Starcraft', 'Age of Empires', 'Total War: Three Kingdoms', 'Company of Heroes'],
        'Deportes': ['FIFA', 'NBA 2K', 'Madden NFL', 'WWE 2K', 'Rocket League'],
        'Carreras': ['Mario Kart', 'Need for Speed', 'Forza Horizon', 'Burnout Paradise', 'Gran Turismo'],
        'Simulación': ['The Sims', 'SimCity', 'RollerCoaster Tycoon', 'Cities: Skylines', 'Farming Simulator 22'],
        'RPG': ['The Elder Scrolls V: Skyrim', 'The Witcher 3: Wild Hunt', 'Final Fantasy VII Remake', 'Dragon Age: Origins', 'Persona 5'],
        'Plataformas': ['Super Mario Bros.', 'Sonic the Hedgehog', 'Donkey Kong Country', 'Celeste', 'Hollow Knight'],
        'Lucha': ['Street Fighter V', 'Mortal Kombat 11', 'Super Smash Bros. Ultimate', 'Tekken 7', 'Dragon Ball FighterZ'],
        'Shooter': ['Call of Duty: Warzone', 'Overwatch', 'Counter-Strike: Global Offensive', 'Rainbow Six Siege', 'Destiny 2'],
        'Sandbox': ['Minecraft', 'Grand Theft Auto V', 'Red Dead Redemption 2', "No Man's Sky", 'Terraria'],
        'Estrategia en tiempo real (RTS)': ['Starcraft II', 'Age of Empires II', 'Warcraft III', 'Command & Conquer: Red Alert 2', 'Stronghold Crusader'],
        'Multijugador en línea Battle Arena (MOBA)': ['League of Legends', 'Dota 2', 'Smite', 'Heroes of the Storm', 'Vainglory'],
        'Juegos de rol (RPG, ARPG y más)': ['The Witcher 3: Wild Hunt', 'Skyrim', 'Dark Souls III', 'Diablo III', 'Path of Exile'],
        'Simulación y deportes': ['FIFA 22', 'NBA 2K22', 'Football Manager 2022', 'Pro Evolution Soccer 2022', 'Rocket League'],
        'Rompecabezas y juegos de fiesta': ['Tetris Effect: Connected', 'Overcooked! All You Can Eat', 'Mario Party Superstars', 'Keep Talking and Nobody Explodes', 'Jackbox Party Pack'],
        'Acción-aventura': ['The Legend of Zelda: Breath of the Wild', 'God of War', 'Spider-Man: Miles Morales', "Assassin's Creed Valhalla", 'Red Dead Redemption 2'],
        'Survival': ['The Forest', 'ARK: Survival Evolved', 'Rust', 'Subnautica', 'The Long Dark'],
        'Horror': ['Resident Evil Village', 'Silent Hill 2', 'Amnesia: The Dark Descent', 'Outlast', 'Alien: Isolation'],
        'Ciencia ficción': ['Mass Effect', 'Deus Ex', 'Prey', 'System Shock 2', 'XCOM 2'],
        'Fantasía': ['Dragon Age: Inquisition', 'Divinity: Original Sin 2', 'Dark Souls', 'The Elder Scrolls IV: Oblivion', 'Kingdoms of Amalur: Reckoning'],
        'Misterio': ['L.A. Noire', 'Murdered: Soul Suspect', 'Her Story', 'The Vanishing of Ethan Carter', 'Return of Obra Dinn'],
        'Historia visual': ['Doki Doki Literature Club!', 'Phoenix Wright: Ace Attorney', 'Steins;Gate', 'The House in Fata Morgana', 'VA-11 Hall-A: Cyberpunk Bartender Action'],
        'Musical': ['Beat Saber', 'Guitar Hero', 'Dance Dance Revolution', 'Crypt of the NecroDancer', 'Thumper'],
        'Educativo': ['Minecraft: Education Edition', 'Kerbal Space Program', 'Carmen Sandiego', 'The Oregon Trail', 'Math Blaster'],
        'Casual': ['Candy Crush Saga', 'Angry Birds', 'Plants vs. Zombies', 'Fruit Ninja', 'Sudoku']
    };
    
    const games = gamesByGenre[selectedGenre] || [];
    
    return (
        <>
            <GroupHeader />
            <div className="container px-4 px-lg-5 mt-5">
                    <MatchCarousel/>
                    </div>
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {games.map((game, index) => (
                    <GroupCards
                       key={index}
                       groupName={game}
                       games={games}
                    />
                ))}
            </div>

            <div className='row'>
                <div className='col-6'>
                    <GroupWall />
                </div>
                <div className='col-6'>
                    <GroupNewsCarousel />
                </div>
            </div>

        </>
    )
}

export default Group
