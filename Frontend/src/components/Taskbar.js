import React from 'react';
import './Taskbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Taskbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/');
    };

    return (
        <div className="taskbar">
            <ul className="nav-list">
                <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
                <li><Link to="/dashboard/profile" className="nav-link">Profile</Link></li>
                <li><Link to="/dashboard/deposit" className="nav-link">Deposit</Link></li>
                <li><Link to="/dashboard/loan" className="nav-link">Loan</Link></li>
                <li>
                    <button onClick={handleLogout} className="logout-button">Log Out</button>
                </li>
            </ul>
        </div>
    );
};

export default Taskbar;