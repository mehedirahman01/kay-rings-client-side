import React from 'react';
import { IconContext } from 'react-icons';
import { FaHome, FaMoneyCheckAlt } from 'react-icons/fa';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import CustomerOrders from './CustomerOrders/CustomerOrders/CustomerOrders';
import CustomerReview from './CustomerReview/CustomerReview/CustomerReview';
import DashboardWelcome from './DashboardWelcome/DashboardWelcome';
import Payment from './Payment/Payment';



const Dashboard = () => {
    let { path, url } = useRouteMatch()
    return (
        <div>

            <div className="row py-3 m-0">
                <IconContext.Provider value={{ color: "white", size: "1.2em", className: "global-class-name" }}>
                    <div className="col-lg-2 bg-dark p-0 pt-4">
                        <Link to={`${url}`}>
                            <button className="btn btn-dark border border-0">
                                <div className="d-flex flex-row">
                                    <FaHome></FaHome>
                                    <h6 className="m-0 ps-2">Dashboard</h6>
                                </div>
                            </button>
                        </Link>

                        <hr className="text-white" />
                        <Link to={`${url}/payment`}>
                            <button className="btn btn-dark border border-0">
                                <div className="d-flex flex-row ">
                                    <FaMoneyCheckAlt></FaMoneyCheckAlt>
                                    <h6 className="m-0 ps-2">Pay</h6>
                                </div>
                            </button>
                        </Link>
                        <br />
                        <Link to={`${url}/myOrders`}>
                            <button className="btn btn-dark border border-0">
                                <div className="d-flex flex-row ">
                                    <FaMoneyCheckAlt></FaMoneyCheckAlt>
                                    <h6 className="m-0 ps-2">My Orders</h6>
                                </div>
                            </button>
                        </Link>
                        <br />
                        <Link to={`${url}/review`}>
                            <button className="btn btn-dark border border-0">
                                <div className="d-flex flex-row ">
                                    <FaMoneyCheckAlt></FaMoneyCheckAlt>
                                    <h6 className="m-0 ps-2">Review</h6>
                                </div>
                            </button>
                        </Link>
                    </div>
                </IconContext.Provider>
                <div className="col-lg-10 p-0">
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
                    </Switch>
                </div>
            </div>




        </div >
    );
};

export default Dashboard;