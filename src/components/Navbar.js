import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/reecologo.png';
import axios from 'axios';

const Navbar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        // Always prepend "real estate" to the user input
        const query = `real estate ${searchQuery.trim()}`;

        setLoading(true);
        onSearch(query); // Pass the modified query to the parent component
        setLoading(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="https://reecocefe.in/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://reecocefe.in/about-us/">ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://reecocefe.in/services/">OUR SERVICES</a>
                        </li>
                    </ul>
                    <div className="search-container">
                        <i className="fas fa-search search-icon"></i>
                        <input
                            className="search-input"
                            id="search-input"
                            type="search"
                            placeholder="Search..."
                            aria-label="Search"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />
                        <button className="search-button" type="submit" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
            </nav>

            {loading && <p>Loading...</p>}
        </>
    );
};

export default Navbar;
