import React from "react";
import Logo from "./icons/Logo.svg";
import './Header.css'

function Header() {
    return (
        <img className="logoo" src={Logo} alt="Little lemon logo" />
    );
};
export default Header;