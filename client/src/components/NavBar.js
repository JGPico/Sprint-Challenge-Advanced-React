import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

function NavBar () {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <nav>
            <h1>Navigation</h1>
            <button 
            onClick={toggleMode}>Toggle DarkMode</button>
        </nav>
    )
}

export default NavBar;