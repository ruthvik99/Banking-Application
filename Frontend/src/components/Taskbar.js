import React from 'react';
import './Taskbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Taskbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user session data if needed (e.g., localStorage, cookies)
        // For now, we'll simply navigate to the homepage
        navigate('/');
    };

    return (
        <div className="taskbar">
            <ul className="nav-list">
                <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
                <li><Link to="/profile" className="nav-link">Profile</Link></li>
                <li><Link to="/deposit" className="nav-link">Deposit</Link></li>
                <li><Link to="/loans" className="nav-link">Loans</Link></li>
                <li>
                    <button onClick={handleLogout} className="logout-button">Log Out</button>
                </li>
            </ul>
        </div>
    );
};

export default Taskbar;