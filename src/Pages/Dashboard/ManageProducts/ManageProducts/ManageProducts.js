import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import ManageProductsTable from '../ManageProductsTable/ManageProductsTable';

const ManageProducts = () => {
    const [products, setProducts] = useState([])

    // Get Orders
    useEffect(() => {
        fetch('https://frozen-chamber-03076.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(error => console.log(error))
    }, [])

    // Handle Order Cancel
    const handleDeleteProduct = id => {
        var confirm = window.confirm("Are you sure you want to Delete Product?")
        if (confirm) {
            fetch(`https://frozen-chamber-03076.herokuapp.com/deleteProduct/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remainingProducts = products.filter(product => product._id !== id)
                        setProducts(remainingProducts)
                    }
                })
        }
    }

    return (
        <div className="container py-5">
            <h3>All Products</h3>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Ring</th>
                            <th scope="col">Short Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(singleProduct => <ManageProductsTable
                                key={singleProduct._id}
                                singleProduct={singleProduct}
                                handleDeleteProduct={
                                    handleDeleteProduct}
                            ></ManageProductsTable>)
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default ManageProducts;