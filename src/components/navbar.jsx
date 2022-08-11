import React from "react";
import {BrowserRouter, Route, Link } from 'react-router-dom';


const Navbar = () => {

    return(
        
        <div className="navigation-menu">
            <nav>
            <ul>
                <li>
                <Link to='/' >Calculator</Link>
                </li>
                <li>
                <Link to='posts' >List of cryptocurrencies</Link>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default Navbar;