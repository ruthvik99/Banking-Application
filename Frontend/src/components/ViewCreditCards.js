import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewCreditCards = () => {
  const [creditCards, setCreditCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCreditCards = async () => {
      try {
        const response = await fetch('http://localhost:8080/creditCard/getAll', {
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
          setCreditCards(data); 
        } else {
          setError('No credit cards found');
        }

        setLoading(false);
      } catch (err) {
        setError('Failed to fetch credit cards. Please try again later.');
        setLoading(false);
      }
    };

    fetchCreditCards();
  }, [token]);

  const handleReturn = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Credit Card List</h1>
      {loading && <p>Loading credit cards...</p>}
      {error && <p>{error}</p>}
      {creditCards.length > 0 ? (
        creditCards.map((creditCard, index) => (
          <div key={index}>
            <div>Card Number: {creditCard.cardnum}</div>
            <div>Credit Limit: {creditCard.creditLimit}</div>
            <div>Amount Due: {creditCard.amountDue}</div>
            <div>Interest Rate: {creditCard.cIntrestRate}%</div>
            <div>Expiry Date: {new Date(creditCard.expirydate).toLocaleString()}</div>

            {/* Accessing properties of branchId */}
            <div>Branch Name: {creditCard.branchId ? creditCard.branchId.bname : 'N/A'}</div>
            <div>Branch City: {creditCard.branchId ? creditCard.branchId.bcity : 'N/A'}</div>

            {/* Accessing properties of ssn */}
            <div>Customer Name: {creditCard.ssn ? creditCard.ssn.cName : 'N/A'}</div>
            <div>Customer City: {creditCard.ssn ? creditCard.ssn.cCity : 'N/A'}</div>
            <div>Customer Phone: {creditCard.ssn ? creditCard.ssn.phoneNumber : 'N/A'}</div>
            <hr />
          </div>
        ))
      ) : (
        <p>No credit cards available.</p>
      )}
      <button onClick={handleReturn}>Return to Dashboard</button>
    </div>
  );
};

export default ViewCreditCards;
