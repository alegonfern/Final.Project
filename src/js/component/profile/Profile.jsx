import React from 'react'
import ProfileCard from './ProfileCard'
import ProfileBasicInfo from './ProfileBasicInfo'
import ProfileBadges from './ProfileBadges'

const Profile = () => {
    return (
        <>
            <div className='row'>
                <div className='col-6'>
                    <ProfileCard />
                </div>
                <div className='col-6'>
                    <ProfileBasicInfo />
                </div>
            </div>

            <div className='row'>
                <div className='col-3'>
                    <ProfileBadges/>
                </div>
            </div>

        </>
    )
}

export default Profile
