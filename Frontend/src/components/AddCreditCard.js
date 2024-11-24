import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCreditCard = () => {
  const [formData, setFormData] = useState({
    cardnum: '',
    creditLimit: '',
    expirydate: '',
    amountDue: '',
    cIntrestRate: '',
    branchId: '',
    ssn: '',
  });

  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  console.log("Token being sent:", token);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format the expirydate to 'yyyy-MM-dd HH:mm:ss'
    const formattedExpiryDate = formatDate(formData.expirydate);

    // Convert numeric fields to numbers
    const formattedData = {
      ...formData,
      cardnum: parseInt(formData.cardnum, 10),
      creditLimit: parseFloat(formData.creditLimit),
      amountDue: parseFloat(formData.amountDue),
      cIntrestRate: parseFloat(formData.cIntrestRate),
      branchId: parseInt(formData.branchId, 10),
      ssn: parseInt(formData.ssn, 10),
      expirydate: formattedExpiryDate, // Formatted expirydate
    };

    console.log("Sending data to server:", formattedData);

    // Validation logic
    if (isNaN(formattedData.cardnum) || isNaN(formattedData.creditLimit) || 
        isNaN(formattedData.amountDue) || isNaN(formattedData.cIntrestRate) ||
        isNaN(formattedData.branchId) || isNaN(formattedData.ssn)) {
      alert('Please ensure all numeric fields contain valid numbers.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/creditCard/add', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        alert('Credit Card added successfully!');
        setFormData({
          cardnum: '',
          creditLimit: '',
          expirydate: '',
          amountDue: '',
          cIntrestRate: '',
          branchId: '',
          ssn: '',
        });
        navigate('/dashboard'); // Redirect to the dashboard
      } else {
        const errorData = await response.json();
        alert(`Credit Card addition failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during credit card addition:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleReturn = () => {
    navigate('/dashboard');
  };

  // Helper function to format date to 'yyyy-MM-dd HH:mm:ss'
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    // Format to 'yyyy-MM-dd HH:mm:ss'
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h1>Add Credit Card</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="number"
            name="cardnum"
            placeholder="Card Number"
            value={formData.cardnum}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="number"
            name="creditLimit"
            placeholder="Credit Limit"
            value={formData.creditLimit}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="date"
            name="expirydate"
            placeholder="Expiry Date"
            value={formData.expirydate}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="number"
            name="amountDue"
            placeholder="Amount Due"
            value={formData.amountDue}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="number"
            name="cIntrestRate"
            placeholder="Interest Rate"
            value={formData.cIntrestRate}
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
            Add Credit Card
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

export default AddCreditCard;
