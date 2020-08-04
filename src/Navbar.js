import React from 'react';
import './Navbar.css';
function Navbar(){
    return(
        <nav className="Navbar" id="Navbar">
            
            <a href='curade.com'>Home</a>
            <a href='curade.com/explore'>Explore</a>
            <a href='curade.com/notifications'>Notifications</a>
            <h1 id="CuradeHeader">CURADE</h1>
            
            <a>Profile</a>
            <a>Settings</a>
        </nav>
)}

export default Navbar;