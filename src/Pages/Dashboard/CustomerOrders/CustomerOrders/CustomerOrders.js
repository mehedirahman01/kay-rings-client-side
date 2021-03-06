import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import CustomerOrdersTable from '../CustomerOrdersTable/CustomerOrdersTable';

const CustomerOrders = () => {
    const { user } = useAuth()
    const [customerOrders, setCustomerOrders] = useState([])

    // Get Orders
    useEffect(() => {
        fetch('https://frozen-chamber-03076.herokuapp.com/myOrders', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCustomerOrders(data)
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
                        const remainingOrders = customerOrders.filter(order => order._id !== id)
                        setCustomerOrders(remainingOrders)
                    }
                })
        }
    }

    return (
        <div className="container py-5">
            <h3>My Orders</h3>
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
                            <th scope="col">Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerOrders.map(singleOrder => <CustomerOrdersTable
                            key={singleOrder._id}
                            singleOrder={singleOrder}
                            handleCancelOrder={handleCancelOrder}
                        ></CustomerOrdersTable>)}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default CustomerOrders;