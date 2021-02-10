import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">The Librarian</span>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/search" className="nav-link">
                            Search
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/saved"  className="nav-link">
                            BookShelf
                        </Link>
                    </li>
                </ul>
            {/* </div> */}
        </nav>
    );
}
 
export default Navbar;