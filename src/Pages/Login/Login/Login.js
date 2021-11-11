import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { user, loginUser, registerUser, signout } = useAuth()
    const [loginData, setLoginData] = useState({})

    const history = useHistory()
    const location = useLocation()

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }

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
                            <div className="form-group">
                                <input onBlur={handleOnBlur} type="text" name="email" className="form-control mt-2" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input onBlur={handleOnBlur} type="password" name="password" className="form-control mt-2" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success mt-2">Sign In</button>
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