import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        ssn: '',
        cName: '',
        cCity: '',
        phoneNumber: '',
        username: '',
        password: '',
        cScore: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Signup successful!');
                setFormData({
                    ssn: '',
                    cName: '',
                    cCity: '',
                    phoneNumber: '',
                    username: '',
                    password: '',
                    cScore: '',
                });
            } else {
                const errorData = await response.json();
                alert(`Signup failed: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="signup-form-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <label htmlFor="ssn">SSN:</label>
                    <input
                        type="text"
                        id="ssn"
                        name="ssn"
                        value={formData.ssn}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cName">Full Name:</label>
                    <input
                        type="text"
                        id="cName"
                        name="cName"
                        value={formData.cName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cCity">City:</label>
                    <input
                        type="text"
                        id="cCity"
                        name="cCity"
                        value={formData.cCity}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        pattern="\d{10}" // Ensures the phone number is 10 digits
                        title="Phone number must be 10 digits"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength="6"
                        title="Password must be at least 6 characters long"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cScore">Credit Score:</label>
                    <input
                        type="number"
                        id="cScore"
                        name="cScore"
                        value={formData.cScore}
                        onChange={handleChange}
                        required
                        min="0"
                        max="850"
                        title="Credit score must be between 0 and 850"
                    />
                </div>
                <button type="submit" className="signup-button">
                    Signup
                </button>
            </form>
        </div>
    );
};

export default SignupForm;