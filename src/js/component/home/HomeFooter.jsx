import React from 'react'
import GrapGenderHome from '../GrapGenderHome'
import GrapGeneroHome from '../GrapGeneroHome'

import GrapGameHome from '../GrapGameHome'
const HomeFooter = () => {
    return (
        <>
            <header className="bg-dark my-5 p-5">

                <div className="card-group">

                    <div className="card px-4 py-4">
                        <div className="card-body">
                            <p className="card-text">
                                <small className="text-body-secondary">Quienes somos: </small>
                            </p>
                            <GrapGenderHome />
                        </div>
                    </div>

                    <div className="card px-4 py-4">
                        <div className="card-body">
                            <p className="card-text">
                                <small className="text-body-secondary mb-5">Podio de Generos : </small>
                            </p>
                            <GrapGeneroHome />
                        </div>
                    </div>

                    <div className="card px-4 py-4">
                        <div className="card-body">
                            <p className="card-text">
                                <small className="text-body-secondary">Top 5 Games: </small>
                            </p>
                            <GrapGameHome />
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}

export default HomeFooter
