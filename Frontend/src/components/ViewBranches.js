import React, { useState, useEffect } from 'react';

const ViewBranches = () => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleReturn = () => {
    window.location.href = '/dashboard';
  };

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await fetch('http://localhost:8080/branch/getAll', {
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
        setBranches(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching branches:', err);
        setError('Failed to fetch branches. Please try again later.');
        setLoading(false);
      }
    };

    fetchBranches();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      <h1>Branch List</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Branch ID</th>
            <th style={styles.th}>Branch Name</th>
            <th style={styles.th}>Assets</th>
            <th style={styles.th}>City</th>
            <th style={styles.th}>Street</th>
            <th style={styles.th}>Total Customers</th>
          </tr>
        </thead>
        <tbody>
          {branches.map((branch, index) => (
            <tr key={index}>
              <td>{branch.branchId}</td>
              <td>{branch.bname}</td>
              <td>{branch.assets}</td>
              <td>{branch.bcity}</td>
              <td>{branch.bstreet}</td>
              <td>{branch.totcustomers}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleReturn} style={styles.button}>
        Return to Dashboard
      </button>
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
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    textAlign: 'left',
  },
  td: {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ViewBranches;
