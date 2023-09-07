import React from 'react'
import ProfileCard from './ProfileCard'
import GroupCard from './group component/GroupCard'
import GroupCarousel from './group component/GroupCarousel'
import PostList from './post components/PostList'
import News from './group component/News'

const Group = () => {
    return (
        <div className='container'>
            <div className='row'>
                
                <div className='col-4'>
                    <ProfileCard />
                </div>
                <div className='col-8'>
                    <GroupCard
                        imagen={'https://bitwares.net/wp-content/uploads/2021/08/Shooters-Gratuitos-Competitivos-Bitwares-810x200.jpg?crop=1'} />
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <GroupCarousel />
                    </div>
                </div></div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-8'>
                        <PostList />
                    </div>
                    <div className='col-4'>
                        <News />
                    </div>
                </div></div>
        </div>
    )
}

export default Group
