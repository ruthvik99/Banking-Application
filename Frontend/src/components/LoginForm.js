import React, { useState } from 'react';
import { login } from '../services/auth';
import './LoginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState(''); // Updated to use "username"
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous errors
        try {
            const data = await login({ username, password }); // Updated to send "username" and "password"
            alert('Login successful!');
            // Redirect to the dashboard or another page after login
            window.location.href = '/dashboard'; // Adjust the route as needed
        } catch (err) {
            setError(err.message || 'Invalid login credentials'); // Show backend error message if available
        }
    };

    return (
        <div className="login-form-container">
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;