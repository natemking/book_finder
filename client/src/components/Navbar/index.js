import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // Render Navbar
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <span className="navbar-brand mb-0 h1">
                Google Books
            </span>
            <ul className="navbar-nav mr-auto d-flex flex-row w-100">
                <li className="nav-item">
                    <Link to="/search" className="nav-link mr-3 mr-md-0">
                        Search
                    </Link>
                </li>
                <li className="nav-item">
                <Link to="/saved"  className="nav-link">
                        Saved
                    </Link>
                </li>
            </ul>

        </nav>
    );
}
 
export default Navbar;