import React from 'react'
import './Frame.css'

function Frame(props) {
    return (
        <div className="frame">
            <div className="frame-photo" style={{ backgroundImage: `url(${props.img})` }}>
            </div>
            <div className="frame-text">
                <h2>
                    {props.name}
                </h2>
                <span>
                    {props.role}
                </span>
            </div>
        </div>
    )
}

export default Frame
