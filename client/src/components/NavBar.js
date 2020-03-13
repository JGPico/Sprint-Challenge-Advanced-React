import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

function NavBar () {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <nav className='nav-bar'>
            <h1 className='nav-item'>Navigation</h1>
            <button className='nav-item'
            onClick={toggleMode}>Toggle DarkMode</button>
        </nav>
    )
}

export default NavBar;