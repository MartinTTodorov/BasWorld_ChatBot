import React from "react"
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <h2 className={styles.textPrimary}>Bus world</h2>
                <ul>
                    <li className="nav-item">
                        <NavLink to="/" aria-current="page">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/signup" aria-current="page">Sign up</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login" aria-current="page">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/chatbot" aria-current="page">Chat bot</NavLink>
                    </li>
                </ul>
        </nav>
    )
}

export default NavBar;