import React from 'react';
import Taskbar from './Taskbar'

const Profile = () => {
    return (
        <div>
            <Taskbar />  {/* Display the Taskbar */}
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Profile</h1>
                <p>Here you can update your personal profile details.</p>
                {/* Add form or other content related to profile management */}
            </div>
        </div>
    );
};

export default Profile;