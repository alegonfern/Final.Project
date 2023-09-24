import React from 'react'

const HomeCard = ({groupImagen, groupName}) => {
    return (
        <>
            <div className="col mb-5">
                <div className="card h-100 rounded">

                    {/* Sale badge*/}
                    <div
                        className="badge bg-dark text-white position-absolute"
                        style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                        # Usuarios
                    </div>
              

                    <img
                        className="card-img-top"
                        src={groupImagen}
                        alt="..."
                    />

                    <div className="card-footer p-4 pt-3 border-top-0 bg-transparent">
                        <div className="text-center">
                            <a className="btn btn-outline-dark mt-auto" href="#">
                                {groupName}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCard
