import React from 'react';
import Taskbar from './Taskbar'

const Deposit = () => {
    return (
        <div>
            <Taskbar />  {/* Display the Taskbar */}
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Deposit</h1>
                <p>Here you can make deposits to your account.</p>
                {/* Add form or other content related to deposits */}
            </div>
        </div>
    );
};

export default Deposit;