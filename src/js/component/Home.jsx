import React from 'react'
import HomeGroupCarousel from "./home component/HomeGroupCarousel"
import PostList from './post components/PostList';
import ProfileCard from './ProfileCard';

const Home = () => {
    return (
        <div className="container-fluid mt-4 pt-5"> {/* Agregué un padding-top aquí */}
            <div className="container border-top border-muted my-5">
                <div className="row">
                    <div className="col-12 order-1 order-md-1">
                        <ProfileCard />
                    </div>
                    <div className="col-12 order-2 order-md-2 d-flex flex-column">
                        <HomeGroupCarousel className="order-1 flex-grow-1 w-100 mt-3" />
                    </div>
                    <div className="col-12 order-3 order-md-3">
                        <div className='post-container'>
                            <h3>Bitácora</h3>
                            <PostList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
