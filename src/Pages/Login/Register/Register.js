import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
        console.log(newLoginData)
    }

    const handleRegistration = e => {
        registerUser(loginData.email, loginData.password, loginData.name, history)
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