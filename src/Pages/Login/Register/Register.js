import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [registrationData, setRegistrationData] = useState({});
    const { registerUser, authError, isLoading } = useAuth();
    const history = useHistory()

    // Handle Input OnBlur
    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newRegistrationData = { ...registrationData }
        newRegistrationData[field] = value
        setRegistrationData(newRegistrationData)
    }

    // Handle Registration 
    const handleRegistration = e => {
        registerUser(registrationData.email, registrationData.password, registrationData.name, history)
        e.preventDefault()
    }

    return (
        <div className="container py-5">
            <div className="login-form border border-dark py-5">
                <h2>Register</h2>
                <form onSubmit={handleRegistration}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-6">
                            <div className="form-group">
                                <input onBlur={handleOnBlur} type="text" name="name" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input onBlur={handleOnBlur} type="text" name="email" className="form-control mt-2" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input onBlur={handleOnBlur} type="password" name="password" className="form-control mt-2" placeholder="Password" />
                            </div>
                            {isLoading && <div className="me-auto">
                                <div className="spinner-border" style={{ width: "2.5rem", height: "2.5rem" }} role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>}
                            {authError && <p className="pt-2 text-danger">An Error Occured! Please provide valid input</p>}
                            <div className="form-group">
                                <button className="btn btn-success mt-2">Register</button>
                            </div>
                        </div>
                    </div>
                </form>
                <h6 className="pt-2">Already Registered <NavLink to="/login">Login Here</NavLink></h6>
            </div>
        </div>
    );
};

export default Register;