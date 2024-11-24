import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear the token
        window.location.href = '/login'; // Redirect to login
    };

    const handleAddCustomerClick = () => {
        window.location.href = '/add-customer';
    };
    const handleCustomerViewClick = () => {
        window.location.href = '/view-customers'
    };
    const handleBranchViewClick = () => {
        window.location.href = '/view-branches'
    };
    const handleAddBranchClick = () => {
        window.location.href = '/add-branch';
    };
    const handleAccountViewClick = () => {
        window.location.href = '/view-accounts'
    };
    const handleAddAccountClick = () => {
        window.location.href = '/add-account';
    };
    const handleCCViewClick = () => {
        window.location.href = '/view-ccs'
    };
    const handleAddCCClick = () => {
        window.location.href = '/add-cc';
    };
    const handleLoanViewClick = () => {
        window.location.href = '/view-loans'
    };
    const handleAddLoanClick = () => {
        window.location.href = '/add-loan';
    };

    return (
        <div className="dashboard-container">
            <h1>Welcome to the Dashboard</h1>
            <p>This is a protected route. Add your content here.</p>
            <button onClick={handleLogout} className="logout-button">
                Logout
            </button>
            <h2>Customer Interactions: </h2>
            <button onClick = {handleAddCustomerClick}>Add Customer</button>
            <button onClick = {handleCustomerViewClick}>View Customers</button>
            <h2>Branch Interactions: </h2>
            <button onClick = {handleAddBranchClick}>Add Branch</button>
            <button onClick = {handleBranchViewClick}>View Branches</button>
            <h2>Account Interactions (Customer and Branch must be previously established): </h2>
            <button onClick = {handleAddAccountClick}>Add Account</button>
            <button onClick = {handleAccountViewClick}>View Accounts</button>
            <h2>Credit Card Interactions (Customer and Branch must be previously established): </h2>
            <button onClick = {handleAddCCClick}>Add Credit Card</button>
            <button onClick = {handleCCViewClick}>View Credit Cards</button>
            <h2>Loan Interactions (Customer and Branch must be previously established): </h2>
            <button onClick = {handleAddLoanClick}>Add Loan</button>
            <button onClick = {handleLoanViewClick}>View Loans</button>
        </div>
    );
};

export default Dashboard;