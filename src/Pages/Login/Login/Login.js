import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { user, loginUser, authError, isLoading } = useAuth()
    const [loginData, setLoginData] = useState({})

    const history = useHistory()
    const location = useLocation()

    // Handle Input OnBlur
    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }

    // Handle Login
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }

    return (
        <div className="container py-5">
            <div className="login-form border border-dark py-5">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-6">
                            {/* Login Form */}
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
                            {authError && <p className="pt-2 text-danger">An Error Occured! Please provide valid username and password</p>}
                            <div
                                className="form-group">
                                <button className="btn btn-dark btn-outline-light border border-0 mt-2">Sign In</button>
                                <br />
                            </div>
                        </div>
                    </div>
                </form>
                <h6 className="pt-2">New to the Site? <NavLink to="/register">Create Account</NavLink></h6>
            </div>
        </div>
    );
};

export default Login;