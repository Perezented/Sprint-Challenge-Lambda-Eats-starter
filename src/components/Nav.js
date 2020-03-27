import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
    return (
        <nav>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/login">
                <button>Login</button>
            </Link>
        </nav>
    );
}
