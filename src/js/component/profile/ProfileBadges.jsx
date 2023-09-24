import React from 'react'

const ProfileBadges = () => {
    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
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
                                src="https://cdn-icons-png.flaticon.com/512/536/536056.png"
                                alt="..."
                            />
                            
                            <div className="card-footer p-4 pt-3 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <a className="btn btn-outline-dark mt-auto" href="#">
                                        Trofeo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfileBadges
