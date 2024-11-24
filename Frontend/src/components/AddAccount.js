import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddAccount = () => {
  const [formData, setFormData] = useState({
    accnum: '',
    balance: '',
    atype: '',
    branchId: '',
    ssn: '',
  });

  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert numeric fields to numbers
    const formattedData = {
      ...formData,
      branchId: parseInt(formData.branchId, 10),
      accnum: parseInt(formData.accnum, 10),
      balance: parseFloat(formData.balance), // Use parseFloat for decimal values
      ssn: parseInt(formData.ssn, 10),
    };

    console.log("Sending data to server:", formattedData);


    // Validation logic
    if (isNaN(formattedData.branchId) || isNaN(formattedData.accnum) || isNaN(formattedData.balance) || isNaN(formattedData.ssn)) {
      alert('Please ensure all numeric fields contain valid numbers.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/account/add', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        alert('Account added successfully!');
        setFormData({
          accnum: '',
          balance: '',
          atype: '',
          branchId: '',
          ssn: '',
        });
        navigate('/dashboard'); // Redirect to the dashboard
      } else {
        const errorData = await response.json();
        alert(`Account addition failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during account addition:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleReturn = () => {
    navigate('/dashboard');
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h1>Add Account</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="number"
            name="accnum"
            placeholder="Account Number"
            value={formData.accnum}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="number"
            name="balance"
            placeholder="Balance"
            value={formData.balance}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="atype"
            placeholder="Account Type"
            value={formData.atype}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="number"
            name="branchId"
            placeholder="Branch ID"
            value={formData.branchId}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="number"
            name="ssn"
            placeholder="SSN"
            value={formData.ssn}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Add Account
          </button>
        </form>
        <button onClick={handleReturn} style={styles.button}>
          Return to Dashboard
        </button>
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
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default AddAccount;
