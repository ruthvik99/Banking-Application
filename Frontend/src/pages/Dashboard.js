import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear the token
        window.location.href = '/login'; // Redirect to login
    };

    return (
        <div className="dashboard-container">
            <h1>Welcome to the Dashboard</h1>
            <p>This is a protected route. Add your content here.</p>
            <button onClick={handleLogout} className="logout-button">
                Logout
            </button>
        </div>
    );
};

export default Dashboard;