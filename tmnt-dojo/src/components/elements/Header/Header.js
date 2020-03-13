import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
    return (
        <div className="tmnt-header">
            <div className="tmnt-header-content">
                <Link to='/'>
                <img className="tmnt-logo" src="./images/dojo_logo.jpg" alt="TMNT Dojo Logo" />
                </Link>
            </div>
        </div>
    )
}

export default Header;

