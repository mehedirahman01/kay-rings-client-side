import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import AllCustomerOrdersTable from '../AllCustomerOrdersTable/AllCustomerOrdersTable';

const AllCustomerOrders = () => {
    const { user } = useAuth()
    const [customerAllOrders, setCustomerAllOrders] = useState([])

    // Get Orders
    useEffect(() => {
        fetch('https://frozen-chamber-03076.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => {
                setCustomerAllOrders(data)
            })
            .catch(error => console.log(error))
    }, [])

    // Handle Order Cancel
    const handleCancelOrder = id => {
        var confirm = window.confirm("Are you sure you want to Cancel Order?")
        if (confirm) {
            fetch(`https://frozen-chamber-03076.herokuapp.com/placeOrder/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remainingOrders = customerAllOrders.filter(booking => booking._id !== id)
                        setCustomerAllOrders(remainingOrders)
                    }
                })
        }
    }

    // Handle Approve Order
    const approveOrder = id => {
        fetch(`https://frozen-chamber-03076.herokuapp.com/order/${id}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                fetch("https://frozen-chamber-03076.herokuapp.com/allOrders")
                    .then(res => res.json())
                    .then(data => {
                        setCustomerAllOrders(data)
                    })
                    .catch(error => console.log(error))
            })

    }

    return (
        <div className="container py-5">
            <h3>All Orders</h3>
            {/* Order Table */}
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Ring</th>
                            <th scope="col">Price</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">City</th>
                            <th scope="col">Country</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Status</th>
                            <th scope="col">Approve</th>
                            <th scope="col">Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customerAllOrders.map(singleOrder => <AllCustomerOrdersTable
                                key={singleOrder._id}
                                singleOrder={singleOrder}
                                handleCancelOrder={handleCancelOrder}
                                approveOrder
                                ={approveOrder}></AllCustomerOrdersTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCustomerOrders;