import React, {useState} from 'react'
import { Link }  from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'
import aeLogo from '../resources/images/ae_logo.png'

function Navbar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{color:'#f5f5f5'}}>
                <div className="navbar">
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars style={{color: "#000000"}} onClick={showSidebar} />
                    </Link>
                    <img src={aeLogo} alt="Anaheim Electronics Logo" className="ae-logo" />
                    <div className="desktop-menu">
                        {SidebarData.map((item, index) => {
                            return (
                                <span key={index}>
                                    <Link to={item.path}>
                                        <span>
                                            {item.title}
                                        </span>
                                    </Link>
                                </span>
                            )
                        })}
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose style={{color: "#f5f5f5"}} />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
