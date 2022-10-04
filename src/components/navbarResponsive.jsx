import React from "react";
import NavLinks from "./navLinks";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const NavbarResponsive = () => {

    const [open, setOpen] = useState(false)

    const openMenu = <BiMenuAltRight className="menu-icon" onClick={() => setOpen(!open)} />

    const closeMenu = <AiOutlineClose className="menu-icon-close" onClick={() => setOpen(!open)} />

    return(
         
        <section>
                <div className="navigation-menu-conatiner navbar-responsive">
                    {open ? closeMenu : openMenu}
                    {open && <NavLinks />}
                </div>
        </section>

    )
}

export default NavbarResponsive;