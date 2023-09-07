import React from 'react'

const ProfileCard = () => {
    return (
        <div className="card mb-3 border-0 pt-5" style={{ width: "420px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://img.freepik.com/iconos-gratis/usuario_318-875902.jpg" className="img-fluid rounded-circle" alt="Avatar del usuario" />
                </div>
                <div className="col-md-8 d-flex align-items-end">
                    <div className="card-body">
                        <h5 className="card-title">Nombre de Usuario</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
