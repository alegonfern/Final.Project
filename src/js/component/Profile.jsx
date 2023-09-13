import React from 'react'
import Avatar from './profile component/Avatar'
import UserName from './profile component/UserName'
import UserBadges from './profile component/UserBadges' 
import UserInterests from './profile component/UserInterests'
import RelatedGames from './profile component/RelatedGames'

const Profile = () => {

    const userBadges = [
        { name: 'Registro exitoso', image: 'https://cdn-icons-png.flaticon.com/512/536/536056.png' },
        { name: 'Usuario activo', image: 'https://cdn-icons-png.flaticon.com/512/536/536056.png' },
    ];

    const userInterests = ['Acción', 'Aventura', 'Estrategia'];

    return (
        <div className="container-fluid pt-5">
            <div className='título my-3'><h1 style={{ fontSize: '60px' }}>Mi Perfil</h1></div>
            <div className="container border-top border-muted">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-4 d-flex flex-column align-items-start justify-content-center">
                        <Avatar/>
                        <UserBadges badges={userBadges}/> 
                    </div>
                    <div className="col-12 col-lg-8 d-flex flex-column align-items-start justify-content-center">
                        <UserName />
                    </div>

                    <div className="col-12 col-lg-8 d-flex justify-content-center">
                        <div className="col-6">
                            <UserInterests interests={userInterests} />
                        </div>
                        <div className="col-6">
                            <RelatedGames genres={userInterests} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Profile
