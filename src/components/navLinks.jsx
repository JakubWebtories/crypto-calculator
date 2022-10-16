import React from "react";
import { useState } from "react";
import {  BrowserRouter as Router, NavLink } from 'react-router-dom';
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const NavLinks = () => {

    //const toggle = [show, setShow] = useState(false)
    const toggle = () => console.log("clicked")

    /*
    const openMenu = <BiMenuAltRight className="menu-icon" onClick={() => setShow(!show)} />

    const closeMenu = <AiOutlineClose className="menu-icon-close" onClick={() => setShow(!show)} />
    */

    const navLinkStyles = ({ isActive }) => {
        return{
          color: isActive ? '#F5E43E' : '#fff',
        }
    }

    return(
        <nav className="navigation-menu">
        <ul>
            <li>
                <NavLink to='/' style={navLinkStyles} onClick={toggle} className="menu-item" >Calculator</NavLink>
            </li>
            <li>
                <NavLink to='/posts' style={navLinkStyles} onClick={toggle} >List of cryptocurrencies</NavLink>
            </li>
         </ul>
    </nav>
    )



    {/* 
    return(        
        <nav className="navigation-menu">
            <ul>
                <li>
                    <NavLink to='/' style={navLinkStyles} onClick={toggle} className="menu-item" >Calculator</NavLink>
                </li>
                <li>
                    <NavLink to='/posts' style={navLinkStyles} onClick={toggle} >List of cryptocurrencies</NavLink>
                </li>
             </ul>
        </nav>
    )
    */}
}


export default NavLinks;