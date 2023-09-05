import React from 'react'
import Carousel from './Carousel';
import PostList from './post components/PostList';

const Home = () => {


    return (


        <div className="container-fluid">
            <div class="container border-top border-muted my-5">
                <div class="card mb-3 border-0 pt-5" style={{ width: "420px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="https://img.freepik.com/iconos-gratis/usuario_318-875902.jpg" class="img-fluid rounded-circle" alt="Avatar del usuario" />
                        </div>
                        <div class="col-md-8 d-flex align-items-end">
                            <div class="card-body">
                                <h5 class="card-title">Nombre usuario</h5>
                            </div>
                        </div>
                    </div>
                </div>



                <Carousel />

                <div className='post-container'>
                    <h3>Bitácora</h3>
                    <PostList />
                </div>
            </div>
        </div>


    )
}

export default Home
