import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
const Sidebar = ({navbars,close}) => {
  const location =useLocation()
  return (
    <div className='sidebar' onClick={close}>
        {
             navbars.map((item,index)=>(
                <Link to={item.path}
                className={location.pathname === navbars.path ? "sidebar-link active" : "sidebar-link"}
                 key={index} >
                        <FontAwesomeIcon icon={item.icon}/>
                        {item.display}
                </Link>
                ) )
        }
        <div className=''>
              
        </div>
    </div>
  )
}
export default Sidebar;

