import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    // Check if User data is loaded and show spinner while loading
    if (isLoading) {
        return <div className="vh-100"
        ><div
            className="spinner-border text-success my-5" role="status">
                <span className="visually-hidden">Loading...{isLoading}</span>
            </div>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;