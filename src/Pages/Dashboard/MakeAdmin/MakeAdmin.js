import React from 'react';
import { useState } from 'react';
import admin from '../../../images/dashboard.jpg'

const adminStyle = {
    backgroundImage: `url(${admin})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat'
}

const MakeAdmin = () => {
    const [email, setEmail] = useState('')

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    // Handle Admin Form
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://frozen-chamber-03076.herokuapp.com/makeAdmin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                alert("Made Admin Successfully")
            })
        e.preventDefault()
    }

    return (
        <div style={adminStyle} className="container py-5">
            <h3>Make Admin</h3>
            <div className="form-group">
                <form onSubmit={handleAdminSubmit}>
                    <input onBlur={handleOnBlur} type="text" name="email" className="form-control mt-2" placeholder="Email" />
                    <button className="btn btn-dark btn-outline-light border border-0 mt-2">Make Admin</button>
                    <br />
                </form>
            </div>

        </div >
    );
};

export default MakeAdmin;