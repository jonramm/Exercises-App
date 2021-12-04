import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="nav-bar displayed-items">
            <Link to="/" className="react-link">Home</Link>
        </div>
    )
}

export default NavBar;