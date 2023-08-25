// Header Component: Header.jsx
import React, { useState } from 'react';

// React Router Dom Imports:
import { Link, NavLink } from 'react-router-dom';

// Media Imports:
import NavLogo from "../Media/nav-logo.mp4";
import CartLogo from "../Media/cart-logo.gif";

// Importing Components:
import NavSecond from './NavSecond.jsx';
import { useCartContext } from '../Context/CartContext.jsx';
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {

    const [menuIcon, setMenuIcon] = useState(true);
    const { total_item } = useCartContext();
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const toggleMenuIcon = () => {
        setMenuIcon(MenuIcon => !MenuIcon);
    };

    return (
        <>
            <nav id="nav-bar" className="navbar navbar-expand-lg">
                <div className="container-fluid ps-lg-3 pad-start pe-3">
                    <NavLink className="navbar-brand d-flex flex-row align-items-center" to="/">
                        <video
                            src={NavLogo}
                            className="rounded-circle"
                            width="30px"
                            loop muted autoPlay>nav-logo.gif</video>
                        <h1 className="nav-shogen text-center text-white fw-bold mt-2 ms-2 d-flex align-items-center justify-content-center">Sho<span className='text-yellow'>Gen</span></h1>
                    </NavLink>

                    <button className="bg-transparent">
                        <label className="hamburger" htmlFor="check">
                            <input onChange={toggleMenuIcon} checked={menuIcon ? false : true} type="checkbox" id="check" />
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </button>

                    <div className={`navbar-collapse d-flex align-items-end justify-content-end ${menuIcon ? 'hide-menu' : 'show-menu'}`}>
                        <ul className="navbar-nav d-flex align-items-center mb-2 mb-lg-0 none-menu">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/"
                                    onClick={toggleMenuIcon}>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/products"
                                    onClick={toggleMenuIcon}>Products</Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/contact"
                                    onClick={toggleMenuIcon}>Contact</Link>
                            </li>

                            <li className="nav-item log-link">
                                {
                                    isAuthenticated
                                        ? <button
                                            className="log-btn text-logout"
                                            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                            Log Out
                                        </button>
                                        : <button
                                            className="log-btn text-login"
                                            onClick={() => loginWithRedirect()}>Log In</button>
                                }
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link d-flex align-items-center justify-content-center"
                                    to="/cart"
                                    onClick={toggleMenuIcon}>
                                    <img
                                        src={CartLogo}
                                        alt="nav-logo.gif"
                                        className="rounded-circle"
                                        width="30px" />
                                    {
                                        (total_item > 0) && isAuthenticated
                                            ? <span className="cart-total-item">{total_item}</span>
                                            : <></>
                                    }
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <section className='nav-bottom-section d-flex align-items-center justify-content-center'>
                <NavSecond />
            </section>
        </>
    );
};

