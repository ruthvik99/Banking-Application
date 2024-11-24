import React, { useState, useEffect } from "react"; 
import Taskbar from './Taskbar';
import './Profile.css';

const Profile = () => {

    const [userDetails, setUserDetails] = useState({
        ssn: "", 
        creditScore: "", 
        name: "",
        username: "",
        password: "",
        phone: "",
        city: ""
    });

    useEffect(() => {
        // Example of fetching data from localStorage (or use your API here)
        const storedData = JSON.parse(localStorage.getItem("userDetails"));

        if (storedData) {
            setUserDetails({
                ssn: storedData.ssn,
                creditScore: storedData.creditScore,
                name: storedData.name,
                username: storedData.username,
                password: storedData.password,
                phone: storedData.phone,
                city: storedData.city
            });
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated User Details:", userDetails);
        // Here you would typically send the updated details to your backend API
        alert("Profile updated successfully!");
    };

    return (
        <div>
            <Taskbar />  {/* Display the Taskbar */}
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Profile</h1>
                <p>Update your profile details below:</p>
                <form onSubmit={handleSubmit} className="profile-form">
                    {/* Editable Fields */}
                    <div className="form-group">
                        <label>
                            <strong>Name:</strong>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={userDetails.name}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            <strong>Username:</strong>
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={userDetails.username}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            <strong>Password:</strong>
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={userDetails.password}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            <strong>Phone Number:</strong>
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={userDetails.phone}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            <strong>City:</strong>
                        </label>
                        <input
                            type="text"
                            name="city"
                            value={userDetails.city}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Profile;