import React from 'react';
import '../styles/Header.css';


const Header = () => {
    return (
        <header>
            <div className="hero-test-box">
                <h1 style={{ fontStyle: 'italic' }}>
                    Welcome to <span style={{ color: 'aqua' }}>Reecocefe News And Articles</span>
                </h1>
                <a className="btn btn-full" href="https://reecocefe.in/">
                    Latest News
                </a>
                <a className="btn btn-ghost" href="https://reecocefe.in/portfolio/">
                    Show me more
                </a>
            </div>
        </header>
    );
};

export default Header;
