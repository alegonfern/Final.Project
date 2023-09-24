import React from 'react'

const GroupCards = ({groupImagen, groupName}) => {
    return (
        <>
            <section className="py-5">
            <div className="col mb-5">
                <div className="card h-100 rounded">

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
                            <a className="btn btn-outline-dark mt-auto" href="/Group">
                                {groupName}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </section>

        </>
    )
}

export default GroupCards
