import React from 'react'
import GroupHeader from './GroupHeader'
import GroupCards from './GroupCards'
import GroupWall from './GroupWall'
import GroupNewsCarousel from './GroupNewsCarousel'

const Group = () => {
    return (
        <>
            <GroupHeader />

            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <GroupCards />
                <GroupCards />
                <GroupCards />
                <GroupCards />
                <GroupCards />
                <GroupCards />
                <GroupCards />
                <GroupCards />
            </div>

            <div className='row'>
                <div className='col-6'>
                <GroupWall/>
                </div>
                <div className='col-6'>
                <GroupNewsCarousel/>
                </div>
            </div>

        </>
    )
}

export default Group
