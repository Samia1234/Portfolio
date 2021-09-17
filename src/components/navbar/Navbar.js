import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaBars} from'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai'
import { SideBarData } from './SideBarData';
import './Navbar.css'
function Navbar(props) {
    const [sidebar,setSidebar]=useState(false);
    const showSidebar=()=>setSidebar(!sidebar)
    return (
        <div className="side-bar">
          <div className="navbar">
              <Link to='#' className="menu-bar">
                 <FaBars onClick={showSidebar}/>
              </Link>
          </div>  
          <nav className={sidebar ?'nav-menu nav-active' :'nav-menu'}>
              <ul className="nav-menu-items">
                  <li className="navbar-toggle">
                      <Link to="#" className="menu-bar"><AiOutlineClose onClick={showSidebar} /></Link>
                    </li>
                    {SideBarData.map((item,index)=>
                     (
                          <li className={item.cName} key={index}>
                              <Link to={item.path}  onClick={showSidebar}>
                              {item.icon} <span>{item.title}</span></Link>
                          </li>
                      )
                    )}
              </ul>
              
              
              </nav>   
        </ div>
    );
}

export default Navbar;