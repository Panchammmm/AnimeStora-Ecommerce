import React from 'react';
import { NavLink } from 'react-router-dom';
import './navmenu.css';

import { CiShoppingCart } from "react-icons/ci";
import Profile from '../../assets/profile.png';
import Logo from '../../assets/site-logo.png';
import Menu from '../../assets/menu.png';
import CloseMenu from '../../assets/close-menu.png';

const NavMenu = () => {
    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    };

    const hideSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    };

    return (
        <div>
            <nav>

                {/* navMenu section */}
                <ul className="sidebar">

                    <div className="pro-cross-btn">
                        <div>
                            <img className="profile" src={Profile} alt="profile"></img>
                        </div>
                        <div onClick={hideSidebar}>
                            <img src={CloseMenu} alt="menu" style={{ transform: "scale(1.1)", paddingRight: "20px" }}></img>
                        </div>
                    </div>

                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink exact to="/" activeClassName="active">Contact</NavLink></li>
                    <li><NavLink exact to="/" activeClassName="active">About</NavLink></li>
                    <li><NavLink exact to="/" activeClassName="active">F&Q</NavLink></li>
                    <li><NavLink exact to="/" activeClassName="active">Delivary</NavLink></li>
                    <li><NavLink exact to="/" activeClassName="active"><CiShoppingCart style={{ fontSize: "1.8rem" }} /></NavLink></li>
                </ul>

                {/* Navbar section */}
                <ul>
                    <ul>
                        <li className="site-name">
                            <img className="site-logo" src={Logo} alt='logo'></img>
                        </li>

                        <li className="hideOnMobile"><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                        <li className="hideOnMobile"><NavLink exact to="/" activeClassName="active">Contact</NavLink></li>
                        <li className="hideOnMobile"><NavLink exact to="/" activeClassName="active">About</NavLink></li>
                        <li className="hideOnMobile"><NavLink exact to="/" activeClassName="active">F&Q</NavLink></li>
                    </ul>

                    <ul>
                        <li className="hideOnMobile"><NavLink exact to="/" activeClassName="active">Delivary</NavLink></li>
                        <li className="hideOnMobile"><NavLink exact to="/" activeClassName="active">Cart &nbsp; <CiShoppingCart style={{ fontSize: "1.3rem" }} /></NavLink></li>
                        <li className="hideOnMobile"><NavLink exact to="/" activeClassName="active"><img className="profile" src={Profile} alt="profile"></img></NavLink></li>
                    </ul>

                    <li className="menu-button" onClick={showSidebar}><a href="#imagee"><img src={Menu} alt="menu"></img></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavMenu;
