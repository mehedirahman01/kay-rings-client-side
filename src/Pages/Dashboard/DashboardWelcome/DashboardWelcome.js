import React from 'react';
import dashboard from '../../../images/dashboard.jpg'

const welcomeStyle = {
    backgroundImage: `url(${dashboard})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat'
}

const DashboardWelcome = () => {
    return (
        <div style={welcomeStyle}>
            <h1 className="pt-5">Welcome to Dashboard</h1>
        </div>
    );
};

export default DashboardWelcome;