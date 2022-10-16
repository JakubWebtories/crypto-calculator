import React from "react";
import { NavLink } from "react-router-dom";

const NavbarDesktop = () => {

    const navLinkStyles = ({ isActive }) => {
        return{
          color: isActive ? '#F5E43E' : '#fff',
        }
    }

    return(
         
        <section>
                <div className="navigation-menu-conatiner navbar-desktop navigation-menu">
                    <ul>
                            <li className="menu-item">
                                <NavLink to="/" style={navLinkStyles}>Calculator</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="/coins" style={navLinkStyles}>List of cryptocurrencies</NavLink>
                            </li>
                        </ul>
                </div>
        </section>

    )
}

export default NavbarDesktop;