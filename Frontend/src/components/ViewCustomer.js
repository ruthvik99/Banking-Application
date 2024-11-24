import React, { useState, useEffect } from 'react';

const ViewCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');

  const handleReturn = () => {
    window.location.href = '/dashboard'
    };


  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:8080/customer/getAll', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          setError(`Error: ${errorData.message}`);
          setLoading(false);
          return;
        }

        const data = await response.json();
        setCustomers(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching customers:', err);
        setError('Failed to fetch customers. Please try again later.');
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      <h1>Customer List</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>SSN</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>City</th>
            <th style={styles.th}>Phone Number</th>
            <th style={styles.th}>Username</th>
            <th style={styles.th}>Credit Score</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.ssn}</td>
              <td>{customer.cName}</td>
              <td>{customer.cCity}</td>
              <td>{customer.phoneNumber}</td>
              <td>{customer.username}</td>
              <td>{customer.cScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick = {handleReturn}>Return to Dashboard</button>
    </div>
  );

};

const styles = {
    container: {
      padding: '10px',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      margin: '20px 0',
    },
    th: {
      border: '1px solid #ddd',
      padding: '5px 1px',
      backgroundColor: '#007BFF',
      color: '#fff',
      textAlign: 'left',  
    },
    td: {
      border: '11px solid #ddd',
      padding: '18px 12px', 
      textAlign: 'left',  
    },
  };

export default ViewCustomers;
