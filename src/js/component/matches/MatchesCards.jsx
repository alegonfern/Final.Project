import React from 'react'

const GroupCards = () => {
    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    {/* <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"> */}
                    <div className="col mb-5 rounded">
                        <div className="card h-100">
                       
                            <img
                                className="card-img-top"
                                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                alt="..."
                            />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Nombre Usuario</h5>
                                    
                                    <span className="text-muted">
                                        Porcentaje de compatibilidad
                                    </span>
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <a className="btn btn-outline-dark mt-auto" href="#">
                                        Enviar mensaje
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </section>

        </>
    )
}

export default GroupCards
