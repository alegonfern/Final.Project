import React from 'react'
import Carousel from './Carousel';
import PostList from './post components/PostList';
import ProfileCard from './ProfileCard';

const Home = () => {


    return (

        <div className='row'>
            <div className="container-fluid">
                <div class="container border-top border-muted my-5">
                   
                    <ProfileCard/>
                    
                    <Carousel />

                    <div className='post-container'>
                        <h3>Bitácora</h3>
                        <PostList />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home
