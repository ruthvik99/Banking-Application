import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBranch = () => {
  const [formData, setFormData] = useState({
    branchId: '',
    bname: '',
    assets: '',
    bcity: '',
    bstreet: '',
    totcustomers: '',
  });

  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    if (!formData.branchId.trim()) {
      alert('Branch ID is required.');
      return;
    }

    if (parseFloat(formData.assets) <= 0) {
      alert('Assets must be a positive number.');
      return;
    }

    if (parseInt(formData.totcustomers, 10) < 0 || !/^\d+$/.test(formData.totcustomers)) {
      alert('Total customers must be a non-negative integer.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/branch/add', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Branch added successfully!');
        setFormData({
          branchId: '',
          bname: '',
          assets: '',
          bcity: '',
          bstreet: '',
          totcustomers: '',
        });
        navigate('/dashboard'); // Redirect to the dashboard
      } else {
        const errorData = await response.json();
        alert(`Branch addition failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during branch addition:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h1>Add Branch</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="branchId"
            placeholder="Branch ID"
            value={formData.branchId}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="bname"
            placeholder="Branch Name"
            value={formData.bname}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="number"
            name="assets"
            placeholder="Assets"
            value={formData.assets}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="bcity"
            placeholder="City"
            value={formData.bcity}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="bstreet"
            placeholder="Street"
            value={formData.bstreet}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="number"
            name="totcustomers"
            placeholder="Total Customers"
            value={formData.totcustomers}
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
  },
};

export default AddBranch;
