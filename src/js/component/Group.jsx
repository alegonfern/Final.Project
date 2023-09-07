import React from 'react'
import ProfileCard from './ProfileCard'
import GroupCard from './group component/GroupCard'
import GroupCarousel from './group component/GroupCarousel'

const Group = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <ProfileCard />
                </div>
                <div className='col-8'>
                    <GroupCard 
                    imagen={'https://bitwares.net/wp-content/uploads/2021/08/Shooters-Gratuitos-Competitivos-Bitwares-735x400.jpg?crop=1'}/>
                </div>
                <div className='col-12'>
                    <GroupCarousel />             
                </div>
            </div>
        </div>
    )
}

export default Group
