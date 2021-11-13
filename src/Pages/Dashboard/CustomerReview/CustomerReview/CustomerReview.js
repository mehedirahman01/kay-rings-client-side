import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const CustomerReview = () => {
    const { register, errors, handleSubmit, reset } = useForm();
    const { user } = useAuth()
    const history = useHistory()

    // Handle Review Form Data
    const onSubmit = (formData) => {
        formData.name = user.displayName
        formData.email = user.email

        fetch("https://frozen-chamber-03076.herokuapp.com/review", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(result => {
                alert("Review Submitted")
                reset()
                history.push("/dashboard")
            })
    };


    return (
        <div>
            {/* Review Form */}
            <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label>Rating</label>
                    <br />
                    <select {...register("rating")}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label>Your Review</label>
                    <textarea className="form-control" id="floatingTextarea2" defaultValue="" style={{ height: "100px" }} {...register("reviewText", { required: true })}></textarea>
                    {errors?.reviewText && <span>This field is required</span>}
                </div>
                <input className="btn btn-dark btn-outline-light border border-0" type="submit" value="Submit Review" />
            </form>
        </div>

    );
};

export default CustomerReview;