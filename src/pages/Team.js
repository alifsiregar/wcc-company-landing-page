import React from 'react'
import Frame from '../components/Frame'
import {ProfileData} from '../components/ProfileData'

function Team() {
    return (
        <div className='team'>
            <h1>Our Team</h1>
            <div className="team-profile">
                {ProfileData.map((item, index) => {
                    return (
                        <div style={{display: "inline-block"}}>
                            <Frame name={item.name} role={item.role} img={item.img} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Team