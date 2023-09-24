import React from 'react'
import MatchesHeader from './MatchesHeader'
import MatchesCards from './MatchesCards'

const Matches = () => {
    return (

        <>
            <MatchesHeader />

            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <MatchesCards />
                <MatchesCards />
                <MatchesCards />
                <MatchesCards />
                <MatchesCards />
                <MatchesCards />
                <MatchesCards />
                <MatchesCards />
            </div>
        </>
    )
}

export default Matches
