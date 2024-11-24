import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    ssn: '',
    cName: '',
    cCity: '',
    phoneNumber: '',
    username: '',
    password: '',
    cScore: '',
  });

  const token = localStorage.getItem('token');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    if (formData.phoneNumber.length !== 10 || !/^\d+$/.test(formData.phoneNumber)) {
      alert('Phone number must be exactly 10 digits.');
      return;
    }

    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    if (parseInt(formData.cScore, 10) <= 100) {
      alert('Credit score must be greater than 100.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/customer/add', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
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
        navigate('/dashboard'); // Redirect to the dashboard
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
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h1>Add Customer</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="ssn"
            placeholder="SSN"
            value={formData.ssn}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="cName"
            placeholder="Customer Name"
            value={formData.cName}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="cCity"
            placeholder="City"
            value={formData.cCity}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="number"
            name="cScore"
            placeholder="Credit Score"
            value={formData.cScore}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Add to Database</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  formWrapper: {
    width: '400px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default AddCustomer;
