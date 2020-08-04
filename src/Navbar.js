import React from 'react';
import './Navbar.css';
function Navbar(){
    return(
        <nav className="Navbar" id="Navbar">
            <ul id="LeftNavbar">
                    <li>Home</li>
                    <li>Explore</li>
                    <li>Notifications</li>
                    <li>Messages</li>
            </ul>
            <h1 id="CuradeHeader">CURADE</h1>
            <ul id="RightNavbar">
                <li>Liked</li>
                <li>Profile</li>
                <li>Settings</li>
            </ul>
        
        </nav>
    )
}

export default Navbar;