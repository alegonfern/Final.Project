import React from 'react'
import MatchesHeader from './MatchesHeader'
import MatchesCards from './MatchesCards'

const Matches = () => {
    return (

        <>
            <MatchesHeader />

            <div className="row col-12 justify-content-center">
                <MatchesCards />
            </div>
        </>
    )
}

export default Matches
