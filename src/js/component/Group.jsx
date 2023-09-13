import React from 'react'
import GroupCard from './group component/GroupCard'
import GroupCarousel from './group component/GroupCarousel'
import PostList from './post components/PostList'
import NewsCarousel from './group component/NewsCarousel'

const Group = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 mt-5 pt-5'>
                    <GroupCard
                        imagen={'https://bitwares.net/wp-content/uploads/2021/08/Shooters-Gratuitos-Competitivos-Bitwares-735x400.jpg?crop=1'} />
                </div>
            </div>

            <div className="group-carousel-container mt-5 pt-5" style={{ width: "100%" }}>
                <GroupCarousel />
            </div>
            <div className='row'>
                <div className='col-lg-8 col-md-12'>
                    <PostList />
                </div>
                <div className='col-lg-4 col-md-12'>
                    <NewsCarousel/>
                </div>
            </div>
        </div >
    )
}

export default Group
