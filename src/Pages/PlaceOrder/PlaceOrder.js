import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { _id } = useParams()
    const [singleRing, setSingleRing] = useState({})
    const history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:5000/placeOrder/${_id}`)
            .then(res => res.json())
            .then(data => setSingleRing(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="container my-5">
            <h1>Place Your Order</h1>

            <div className="row">
                <div className="col-lg-6 col-12 border rounded p-0">

                    <h6 className="pt-4">Contact Information</h6>
                    {/* User Details Form */}
                    <form className="p-4">

                        <div className="mb-3">
                            <label>First Name</label>
                            <input defaultValue={user.displayName} className="form-control" {...register("name")} />
                        </div>

                        <div className="mb-3">
                            <label>Email</label>
                            <input defaultValue={user.email} className="form-control" {...register("email")} />
                        </div>

                        <div className="mb-3">
                            <label>Address</label>
                            <textarea className="form-control" placeholder="House No, Street" id="floatingTextarea2" defaultValue="" style={{ height: "100px" }} {...register("address")}></textarea>
                        </div>

                        <div className="mb-3">
                            <label>City</label>
                            <input placeholder="Dhaka" className="form-control" {...register("city")} />
                        </div>

                        <div className="mb-3">
                            <label>Country</label>
                            <input placeholder="Bangladesh" className="form-control" {...register("country")} />
                        </div>

                        <div className="mb-3">
                            <label>Phone Number</label>
                            <input placeholder="+88XXXXXXXX" className="form-control" {...register("phone")} />
                        </div>

                        <input className="btn btn-dark btn-outline-light border border-0" type="submit" value="Place Order" />
                    </form>
                </div>

                {/* Package Details */}
                <div className="col-lg-6 col-12 border rounded p-0 order-lg-last order-first mb-lg-0 pb-3">

                    <div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <div className="row">
                                    <div className="col-4">
                                        <img src={singleRing?.img} alt="" width="70%" />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center col-8">
                                        <h6>{singleRing.name}</h6>
                                        <h6>{singleRing.price}$</h6>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6>Subtotal</h6>
                                    <h6>{singleRing.price}$</h6>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6>Shipping</h6>
                                    <h6>5$</h6>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6>Total</h6>
                                    <h6>{parseInt(singleRing.price) + 5}$</h6>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlaceOrder;