import React from "react";
import NavbarDesktop from "./navbarDesktop";
import NavbarResponsive from "./navbarResponsive";

const Navbar = () => {

    return(
         
        <section>
                <div className="navigation-menu-conatiner">
                    <NavbarDesktop />
                    <NavbarResponsive />
                </div>
        </section>

    )
}

export default Navbar;