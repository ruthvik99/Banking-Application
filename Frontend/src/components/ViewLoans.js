import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewLoans = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await fetch('http://localhost:8080/loan/getAll', {
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

        if (Array.isArray(data) && data.length > 0) {
          setLoans(data); 
        } else {
          setError('No loans found');
        }

        setLoading(false);
      } catch (err) {
        setError('Failed to fetch loans. Please try again later.');
        setLoading(false);
      }
    };

    fetchLoans();
  }, [token]);

  const handleReturn = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Loan List</h1>
      {loading && <p>Loading loans...</p>}
      {error && <p>{error}</p>}
      {loans.length > 0 ? (
        loans.map((loan, index) => (
          <div key={index}>
            <div>Loan Number: {loan.loanNumber}</div>
            <div>Amount Left: {loan.amountLeft}</div>
            <div>Amount Loaned: {loan.amountLoaned}</div>
            <div>Interest Rate: {loan.linterestrate}%</div>
            
            {/* Accessing properties of branchId */}
            <div>Branch Name: {loan.branchId ? loan.branchId.bname : 'N/A'}</div>
            <div>Branch City: {loan.branchId ? loan.branchId.bcity : 'N/A'}</div>

            {/* Accessing properties of ssn */}
            <div>Customer Name: {loan.ssn ? loan.ssn.cName : 'N/A'}</div>
            <div>Customer City: {loan.ssn ? loan.ssn.cCity : 'N/A'}</div>
            <div>Customer Phone: {loan.ssn ? loan.ssn.phoneNumber : 'N/A'}</div>
            <hr />
          </div>
        ))
      ) : (
        <p>No loans available.</p>
      )}
      <button onClick={handleReturn}>Return to Dashboard</button>
    </div>
  );
};

export default ViewLoans;
