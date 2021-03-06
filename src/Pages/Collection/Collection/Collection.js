import React, { useEffect } from 'react';
import { useState } from 'react';
import SingleRing from '../SingleRing/SingleRing';

const Collection = () => {
    // Set State
    const [ringCollection, setRingCollection] = useState([])
    const [dataLoaded, setDataLoaded] = useState(false)

    // Load Data
    useEffect(() => {
        fetch("https://frozen-chamber-03076.herokuapp.com/ringCollection")
            .then(res => res.json())
            .then(data => {
                setRingCollection(data)
                setDataLoaded(true)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <div className="container my-5">
            <h1>Our Collection</h1>
            <hr />
            {
                dataLoaded ? <div
                    className="row row-cols-1 row-cols-md-4 g-4"> {ringCollection.map(ring => <SingleRing
                        key={ring._id}
                        singleRing={ring}>
                    </SingleRing>)}
                </div> : <div className="me-auto">
                    <div className="spinner-border" style={{ width: "10rem", height: "10rem" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </div>
    );
};

export default Collection;