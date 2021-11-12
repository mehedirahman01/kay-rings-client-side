import React from 'react';
import { useEffect, useState } from 'react';

const CustomerOrdersTable = (props) => {
    const { singleOrder } = props
    const [selectedRing, setSelectedRing] = useState([])
    const { ringId } = singleOrder

    // Load Data By ID
    useEffect(() => {
        fetch(`http://localhost:5000/placeOrder/${ringId}`)
            .then(res => res.json())
            .then(data => setSelectedRing(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <tr>
            <td>{selectedRing.name}</td>
            <td>{selectedRing.price}$</td>
            <td>{singleOrder.name}</td>
            <td>{singleOrder.email}</td>
            <td>{singleOrder.address}</td>
            <td>{singleOrder.city}</td>
            <td>{singleOrder.country}</td>
            <td>{singleOrder.phone}</td>
            <td>{singleOrder.status}</td>
            <td><button onClick={() => props.handleCancelOrder(singleOrder._id)} className="btn btn-danger">Cancel</button></td>
        </tr>
    );
};

export default CustomerOrdersTable;