import React from 'react'

const GameHeader = () => {
    return (
        <>
            {/* Header*/}
            <header className="bg-secondary py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Grupo filtrado por</h1>
                        <p className="lead fw-normal text-white-50 mb-0">
                        Género de Videojuego
                        </p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default GameHeader
