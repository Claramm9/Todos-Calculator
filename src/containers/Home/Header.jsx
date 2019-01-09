import './styles.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/" className="menu-item">Home</Link></li>
                <li><Link to="/todos" className="menu-item">Todos</Link></li>
                <li><Link to="/calculator" className="menu-item">Calculator</Link></li>
            </ul>
        </nav>
    );
};

export default Header;