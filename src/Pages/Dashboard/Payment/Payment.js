import React from 'react';
import dashboard from '../../../images/dashboard.jpg'
const paymentStyle = {
    backgroundImage: `url(${dashboard})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat'
}

const Payment = () => {
    return (
        <div style={paymentStyle}>
            <h1 className="pt-5">Payment System Coming SOON!!!</h1>
        </div>
    );
};

export default Payment;