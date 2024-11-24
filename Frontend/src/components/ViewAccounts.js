import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewAccounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch('http://localhost:8080/account/getAll', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        console.log('Response:', response);

        if (!response.ok) {
          const errorData = await response.json();
          setError(`Error: ${errorData.message}`);
          setLoading(false);
          return;
        }

        const data = await response.json();
        console.log('Response Data:', data);

        // Check if the response data is an array (or contains the array at the correct path)
        if (Array.isArray(data) && data.length > 0) {
          setAccounts(data); // Now, directly set data if it's the array of accounts
        } else {
          setError('No accounts found');
        }

        setLoading(false);
      } catch (err) {
        setError('Failed to fetch accounts. Please try again later.');
        setLoading(false);
      }
    };

    fetchAccounts();
  }, [token]);

  const handleReturn = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Account List</h1>
      {loading && <p>Loading accounts...</p>}
      {error && <p>{error}</p>}
      {accounts.length > 0 ? (
        accounts.map((account, index) => (
          <div key={index}>
            <div>Account Number: {account.accnum}</div>
            <div>Balance: {account.balance}</div>
            <div>Account Type: {account.atype}</div>
            <div>Branch Name: {account.branchId.bname}</div>
            <div>Branch City: {account.branchId.bcity}</div>
            <div>Customer Name: {account.ssn.cName}</div>
            <div>Customer City: {account.ssn.cCity}</div>
            <div>Customer Phone: {account.ssn.phoneNumber}</div>
            <hr />
          </div>
        ))
      ) : (
        <p>No accounts available.</p>
      )}
      <button onClick={handleReturn}>Return to Dashboard</button>
    </div>
  );
};

export default ViewAccounts;
