import {Outlet, Link} from "react-router-dom";
import React from "react";
import '../index.css';

const layout = () => {
    return (
        <div className="main">
            <nav>
                <Link className="link" to="/login">Log in</Link>
                <Link className="link" to="/signup">Register</Link>
            </nav>
            <Outlet/>
        </div>
    )
};

export default layout;