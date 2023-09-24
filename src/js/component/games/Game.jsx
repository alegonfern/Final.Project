import React from 'react'
import GameHeader from './GameHeader'
import GameCard from './GameCard'
import GameWall from './GameWall'
import GameNewsCarousel from './GameNewsCarousel'

const Game = () => {
    return (
        <>
            <GameHeader />

            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
            </div>

            <div className='row'>
                <div className='col-6'>
                    <GameWall />
                </div>
                <div className='col-6'>
                    <GameNewsCarousel />
                </div>
            </div>

        </>
    )
}

export default Game
