import React from 'react'
import ProfileCard from './ProfileCard'
import ProfileBasicInfo from './ProfileBasicInfo'
import ProfileBadges from './ProfileBadge'
import ProfileInfo from './ProfileInfo'

const Profile = () => {
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <ProfileInfo />
                </div>
                <div className='col-12'>
                    <ProfileBadges />
                </div>
                <div className='col-6'>
                    <ProfileCard />
                </div>
                <div className='col-6'>
                    <ProfileBasicInfo />
                </div>
            </div>

            <div className='row'>

            </div>

        </>
    )
}

export default Profile
