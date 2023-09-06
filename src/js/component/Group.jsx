import React from 'react'
import ProfileCard from './ProfileCard'
import GroupCard from './GroupCard'
import GroupCarousel from './GroupCarousel'

const Group = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <ProfileCard />
                </div>
                <div className='col-8'>
                    <GroupCard />
                </div>
                <div className='col-12'>
                    <GroupCarousel/>
                </div>
            </div>
        </div>
    )
}

export default Group
