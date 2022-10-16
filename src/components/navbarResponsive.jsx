import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const NavbarResponsive = () => {

    const [show, setShow] = useState(false)

    const navLinkStyles = ({ isActive }) => {
        return{
          color: isActive ? '#F5E43E' : '#fff',
        }
    }

    const openMenu = <BiMenuAltRight className="menu-icon" onClick={() => setShow(!show)} />

    const closeMenu = <AiOutlineClose className="menu-icon-close" onClick={() => setShow(!show)} />

    return(
         
        <section>
                <div className="navigation-menu-conatiner navbar-responsive navigation-menu"> 
                   {show ? closeMenu : openMenu}
                   {show &&
                   <ul>
                        <li className="menu-item" onClick={() => setShow(!show)}>
                            <NavLink to="/" style={navLinkStyles}>Calculator</NavLink>
                        </li>
                        <li className="menu-item" onClick={() => setShow(!show)}>
                            <NavLink to="/coins" style={navLinkStyles}>List of cryptocurrencies</NavLink>
                        </li>
                    </ul>
                   }
                </div>
        </section>

    )
}

export default NavbarResponsive;