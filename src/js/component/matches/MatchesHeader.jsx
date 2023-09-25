import React, { useState } from "react";
import GenderPieChart from './GenderPieChart'

const MatchesHeader = () => {
    const [matches, setMatches] = useState([]);
    return (
        <>
            <header className="bg-secondary my-5 p-5">

                <div className="card-group">

                    <div className="card px-4 py-4">

                        <div className="card-body">
                            <p className="card-text">
                                <small className="text-body-secondary">Descripción gráfico </small>
                            </p>
                            <GenderPieChart matches={matches} />
                        </div>
                    </div>

                    <div className="card px-4 py-4">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">
                                <small className="text-body-secondary">Descripción gráfico </small>
                            </p>
                        </div>
                    </div>

                    <div className="card px-4 py-4">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">
                                <small className="text-body-secondary">Descripción gráfico </small>
                            </p>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}

export default MatchesHeader
