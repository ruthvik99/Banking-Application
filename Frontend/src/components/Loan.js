import React from 'react';
import Taskbar from './Taskbar'

const Loan = () => {
    return (
        <div>
            <Taskbar />  {/* Display the Taskbar */}
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Loan</h1>
                <p>Here you can apply for a loan or view your loan details.</p>
                {/* Add form or other content related to loans */}
            </div>
        </div>
    );
};

export default Loan;