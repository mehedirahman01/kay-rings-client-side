import React from 'react';
import { IconContext } from 'react-icons';
import { FaHome, FaMoneyCheckAlt } from 'react-icons/fa';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddProduct from './AddProduct/AddProduct';
import AllCustomerOrders from './AllCustomerOrders/AllCustomerOrders/AllCustomerOrders';
import CustomerOrders from './CustomerOrders/CustomerOrders/CustomerOrders';
import CustomerReview from './CustomerReview/CustomerReview/CustomerReview';
import DashboardWelcome from './DashboardWelcome/DashboardWelcome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageProducts from './ManageProducts/ManageProducts/ManageProducts';
import Payment from './Payment/Payment';



const Dashboard = () => {
    let { path, url } = useRouteMatch()
    const { admin } = useAuth()
    return (
        <div>
            <div className="row py-3 m-0">
                <IconContext.Provider value={{ color: "white", size: "1.2em", className: "global-class-name" }}>
                    {/* Left Menu */}
                    <div className="col-lg-2 col-12 bg-dark p-0 pt-4">
                        <Link to={`${url}`}>
                            <button className="btn btn-dark border border-0">
                                <div className="d-flex flex-row">
                                    <FaHome></FaHome>
                                    <h6 className="m-0 ps-2">Dashboard</h6>
                                </div>
                            </button>
                        </Link>
                        <hr className="text-white" />
                        {/* Regular Users Menu Items */}
                        {!admin && <Link to={`${url}/payment`}>
                            <button className="btn btn-dark border border-0">
                                <div className="d-flex flex-row ">
                                    <FaMoneyCheckAlt></FaMoneyCheckAlt>
                                    <h6 className="m-0 ps-2">Pay</h6>
                                </div>
                            </button>
                            <br />
                        </Link>
                        }
                        {!admin && <Link to={`${url}/myOrders`}>
                            <button className="btn btn-dark border border-0">
                                <div className="d-flex flex-row ">
                                    <FaMoneyCheckAlt></FaMoneyCheckAlt>
                                    <h6 className="m-0 ps-2">My Orders</h6>
                                </div>
                            </button>
                            <br />
                        </Link>}

                        {!admin && <Link to={`${url}/review`}>
                            <button className="btn btn-dark border border-0">
                                <div className="d-flex flex-row ">
                                    <FaMoneyCheckAlt></FaMoneyCheckAlt>
                                    <h6 className="m-0 ps-2">Review</h6>
                                </div>
                            </button>
                            <br />
                        </Link>}

                        {/* Admin Menu Items */}
                        {admin && <Link to={`${url}/allOrders`}>
                            <button className="btn btn-dark border border-0">
                                <div className="d-flex flex-row ">
                                    <FaMoneyCheckAlt></FaMoneyCheckAlt>
                                    <h6 className="m-0">Manage All Orders</h6>
                                </div>
                            </button>
                            <br />
                        </Link>}

                        {admin && <Link to={`${url}/addProduct`}>
                            <button className="btn btn-dark border border-0">
                                <div className="d-flex flex-row ">
                                    <FaMoneyCheckAlt></FaMoneyCheckAlt>
                                    <h6 className="m-0">Add a Product</h6>
                                </div>
                            </button>
                            <br />
                        </Link>}

                        {admin && <Link to={`${url}/manageProducts`}>
                            <button className="btn btn-dark border border-0">
                                <div className="d-flex flex-row ">
                                    <FaMoneyCheckAlt></FaMoneyCheckAlt>
                                    <h6 className="m-0">Manage Products</h6>
                                </div>
                            </button>
                            <br />
                        </Link>}

                        {admin && <Link to={`${url}/makeAdmin`}>
                            <button className="btn btn-dark border border-0">
                                <div className="d-flex flex-row ">
                                    <FaMoneyCheckAlt></FaMoneyCheckAlt>
                                    <h6 className="m-0 ps-2">Make Admin</h6>
                                </div>
                            </button>
                            <br />
                        </Link>}
                    </div>
                </IconContext.Provider>

                {/* Right Section */}
                <div className="col-lg-10 col-12 p-0">
                    {/* Nested Routes */}
                    <Switch>
                        <Route exact path={path}>
                            <DashboardWelcome></DashboardWelcome>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/myOrders`}>
                            <CustomerOrders></CustomerOrders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <CustomerReview></CustomerReview>
                        </Route>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/allOrders`}>
                            <AllCustomerOrders></AllCustomerOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                    </Switch>
                </div>
            </div>




        </div >
    );
};

export default Dashboard;