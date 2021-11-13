import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory()

    // Handle Product Form
    const onProductSubmit = data => {
        fetch("https://frozen-chamber-03076.herokuapp.com/addProduct", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert("Product Added")
                reset()
                history.push('/dashboard/manageProducts')
            })
    }

    return (
        <div className="py-5">
            <h2>Add a Product</h2>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-12">
                    {/* Product Form */}
                    <form className="p-4" onSubmit={handleSubmit(onProductSubmit)}>
                        <div className="mb-3">
                            <label>Ring Name</label>
                            <input className="form-control" placeholder="Ring Name" {...register("name")} />
                        </div>

                        <div className="mb-3">
                            <label>Short Description</label>
                            <textarea className="form-control" placeholder="Short Description" id="floatingTextarea2" defaultValue="" style={{ height: "100px" }} {...register("short_description")}></textarea>
                        </div>

                        <div className="mb-3">
                            <label>Cost</label>
                            <input className="form-control" placeholder="Price" {...register("price")} />
                        </div>

                        <div className="mb-3">
                            <label>Image Url</label>
                            <input required placeholder="Image url" className="form-control" {...register("img")} />
                        </div>

                        <input className="btn btn-success" type="submit" value="Add product" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;