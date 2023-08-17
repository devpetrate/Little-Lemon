import React from "react";
import Logo from "./icons/Logo.svg";
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Link to="/" ><img className="logoo" src={Logo} alt="Little lemon logo" /></Link>
    );
};
export default Header;