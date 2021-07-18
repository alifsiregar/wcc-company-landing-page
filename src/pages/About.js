import React from 'react'
import aeLogo from '../resources/images/ae_logo_large.jpg'

function About() {
    return (
        <div className='about'>
            <div className="about-us">
                <img src={aeLogo} className="ae-logo-large" />
                <h1 style={{marginTop: "2rem", marginBottom: "2rem"}}> About Us</h1>
                <div className="about-us-text">
                    <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id egestas lectus, vel efficitur diam. Praesent mollis sagittis odio, at feugiat augue rhoncus sed. Etiam semper elit eu tellus sodales congue. Ut bibendum luctus nulla, ut porta nulla imperdiet sit amet. Nunc id leo at est suscipit rhoncus. Sed luctus iaculis nibh vitae sollicitudin. Suspendisse auctor, ante sit amet pellentesque tempus, mi sem varius ex, at consequat quam risus non tortor.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default About