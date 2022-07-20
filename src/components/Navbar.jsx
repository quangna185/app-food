import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import {faHome ,faList ,faCog} from "@fortawesome/free-solid-svg-icons"


const Navbar = () => {

   const location =useLocation()
   
    const [showSidebar,setShowSidebar] =useState(false)
    const navbars =[
        {
            display:'Home',
            path:'./',
            icon:faHome
        },
        {
            display:'Recipes',
            path:'./recipes',
            icon: faList
        },
        {
            display:'Settings',
            path:'./settings',
            icon : faCog
        },
    
    ]
    function closeSidebar(){
        setShowSidebar(false)
    }
  return (
        <>
            <div className="navbar container">
                <Link to="/" href="#!" className='logo'>F<span>oo</span>diesHub</Link>
                <div className="nav-links">
                    {
                        navbars.map((item,index)=>(
                        <Link to={item.path}
                         key={index}
                         className={location.pathname === item.path ? " active" : ""} 
                         >
                                {item.display}
                        </Link>
                        ) )
                    }
                </div>
                <div onClick={() => setShowSidebar(true)} 
                className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>

          {showSidebar &&  <Sidebar close={closeSidebar} navbars = {navbars}/>}
        </>
  )
}
export default Navbar;
