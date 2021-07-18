import React from 'react'
import gundamHangarDark from '../resources/images/gundam_hangar_dark.jpg'
import gundamHangar from '../resources/images/gundam_hangar.jpeg'

function Home() {
    return (
        <div className='home'>
            <div className="front-page" style={{ backgroundImage: `url(${gundamHangarDark})` }}>
                <div className="front-page-platform">
                    <h3>
                        Anaheim Electronics
                    </h3>
                    <h1>
                        The future is now.
                    </h1>
                    
                </div>
            </div>
            <div className="front-page-desktop">
                <div style={{width: "25rem"}}>
                    <h3>
                        Anaheim Electronics
                    </h3>
                    <h1 style={{fontSize: "3rem"}}>
                        The future is now.
                    </h1>
                    <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue efficitur faucibus. Nullam vehicula orci quis dolor volutpat, sit amet mollis lacus sollicitudin. Nulla pretium augue eget ornare lacinia.
                    </span>
                </div>
                <img src={gundamHangar} alt="Gundam Hangar" className="gundam-hangar" />
            </div>
        </div>
    )
}

export default Home
