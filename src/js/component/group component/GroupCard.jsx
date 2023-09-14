import React from 'react'

const GroupCard = ({ imagen }) => {

    return (
        <div className="imagen">
            <img src={imagen} alt="Imagen del grupo" style={{ width: '100%', height: '50vh' }} />
        </div>
    )
}

export default GroupCard
