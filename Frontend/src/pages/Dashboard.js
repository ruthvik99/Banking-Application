import React from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';
import Taskbar from '../components/Taskbar'; 


const Dashboard = () => {
    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear the token
        window.location.href = '/login'; // Redirect to login
    };

    const location = useLocation();
    const { name } = location.state || {}; // Retrieve name from location state
    return (
        <div className="dashboard-container">
            <Taskbar />  {/* Display the Taskbar */}
            <h1>Welcome {name} to the Dashboard</h1>
            <p>This is a protected route. Add your content here.</p>
            <button onClick={handleLogout} className="logout-button">
                Logout
            </button>
        </div>
    );
};

export default Dashboard;