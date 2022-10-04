import React from "react";
import {  BrowserRouter as Router, NavLink } from 'react-router-dom';

const NavLinks = () => {

    const navLinkStyles = ({ isActive }) => {
        return{
          color: isActive ? '#F5E43E' : '#fff',
        }
    }

    return(        
        <nav className="navigation-menu">
            <ul>
                <li>
                    <NavLink to='/' style={navLinkStyles} className="menu-item" >Calculator</NavLink>
                </li>
                <li>
                    <NavLink to='/posts' style={navLinkStyles} >List of cryptocurrencies</NavLink>
                </li>
             </ul>
        </nav>
    )
}

export default NavLinks;