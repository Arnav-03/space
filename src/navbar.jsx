import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css'
import rocket from './assets/rocket.png'
import ghar from './assets/home.png'
import closemenu from './assets/close.png'
import menu from './assets/menu.png'

const Navbar = ({ handleNavItemClick }) => {
    return (
        <div className="navbar">
            <div className="icon">
                <img src={rocket} alt="rocket" />
                space
            </div>
            <div className="icons">
                <img src={ghar} alt="rocket" id='icon'/>
                    <img src={menu} alt="rocket" id='icon'/>
                    <img src={closemenu} alt="rocket" id='icon'/>
                </div>
            <div className="list">
                <ul >
                    <li>
                        <Link
                            to="/home"
                            className=""
                            onClick={handleNavItemClick}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className=""
                            onClick={handleNavItemClick}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className=""
                            onClick={handleNavItemClick}
                        >
                            Register
                        </Link>
                    </li>
                </ul>
             
            </div>
        
        </div>
    );
}

export default Navbar;
