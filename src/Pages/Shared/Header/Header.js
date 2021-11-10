import React from 'react';
import { NavLink } from 'react-router-dom';
// Import Icon
import { IconContext } from 'react-icons';
import { RiAccountCircleFill } from 'react-icons/ri'
// Import CSS
import './Header.css'

const Header = () => {
    const user = {}
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    {/* Navbar Left */}
                    <div className="ms-2 fw-bold"><NavLink className="nav-link p-0" to="/"><h3 className="m-0 text-dark">Kay Rings</h3></NavLink></div>

                    {/* Navbar Middle */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto fw-bold">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/home"><h6 className="m-0">Home</h6></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/collection"><h6 className="m-0">Collection</h6></NavLink>
                            </li>
                        </ul>


                        {/* Navbar Right */}
                        <IconContext.Provider value={{ size: "1.5em" }}>
                            <div className="btn-group">
                                <button type="button" className="btn" data-bs-toggle="dropdown" aria-expanded="false">
                                    <h6 className="text-center m-0"><RiAccountCircleFill /> {user?.email ? user.displayName : 'Account'}</h6>
                                </button>
                                {
                                    user?.email ? <ul className="dropdown-menu p-0">
                                        <li> <NavLink className="nav-link" to="/myOrders"><h6 className="text-black m-0">My Orders</h6></NavLink></li>
                                        <li><NavLink className="nav-link" to="/addItem"><h6 className="text-black m-0"> Add New Item</h6></NavLink></li>
                                        <li><NavLink className="nav-link" to="/allOrders"><h6 className="text-black m-0"> All Orders</h6></NavLink></li>
                                        <li><NavLink className="nav-link" to="/home" ><h6 className="text-black m-0">Logout</h6></NavLink></li>

                                    </ul> : <ul className="dropdown-menu p-0">
                                        <li><NavLink className="nav-link text-black" to="/login">Login</NavLink></li>
                                    </ul>
                                }
                            </div>
                        </IconContext.Provider>

                    </div>
                </div >
            </nav >
        </div>
    );
};

export default Header;