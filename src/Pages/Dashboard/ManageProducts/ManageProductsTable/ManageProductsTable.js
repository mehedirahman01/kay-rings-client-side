import React from 'react';
import { useState } from 'react';

const ManageProductsTable = (props) => {
    const { singleProduct } = props

    return (
        <tr>
            <td>{singleProduct.name}</td>
            <td>{singleProduct.short_description}</td>
            <td>{singleProduct.price}$</td>
            <td><img src={singleProduct.img} alt="" width="80%" /></td>
            <td><button className="btn btn-danger" onClick={() => props.handleDeleteProduct(singleProduct._id)}>Delete</button></td>
        </tr>
    );
};

export default ManageProductsTable;