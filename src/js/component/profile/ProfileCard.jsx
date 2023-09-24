import React from 'react'

const ProfileCard = () => {
    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">

                    <div className="col mb-5">
                        <div className="card h-100 rounded">
                            
                            <img
                                className="card-img-top"
                                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                alt="..."
                            />
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <a className="btn btn-outline-dark mt-auto" href="#">
                                        Editar
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

export default ProfileCard
