import React from 'react'
import MatchesHeader from './MatchesHeader'
import MatchesCards from './MatchesCards'
import Sidebar from '../Sidebar';
const Matches = () => {
    return (

        <>
            <Sidebar />
            <div className="row col-12 justify-content-center">
                <MatchesCards />
            </div>
        </>
    )
}

export default Matches
