import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeSingleRing = (props) => {
    const { singleRing } = props
    const { _id } = singleRing
    return (
        <div>
            <div className="col">
                {/* Product Card */}
                <div className="card h-100">
                    <img src={singleRing?.img} className="card-img-top" alt="..."
                    />
                    <div className="card-body">
                        <p className="m-0 fw-bold">{singleRing.name}</p>
                        <span>
                            <small>${singleRing.price}</small>
                        </span>
                        <br />
                        <NavLink className="text-decoration-none" to={`/placeOrder/${_id}`}><button className="btn btn-dark btn-outline-light border border-0">Buy Now</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSingleRing;