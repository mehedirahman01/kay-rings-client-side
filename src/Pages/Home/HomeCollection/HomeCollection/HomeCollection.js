import React, { useEffect } from 'react';
import { useState } from 'react';
import HomeSingleRing from '../HomeSingleRing/HomeSingleRing';

const HomeCollection = () => {

    const [ringCollection, setRingCollection] = useState([])
    const [dataLoaded, setDataLoaded] = useState(false)


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
                    className="row row-cols-1 row-cols-md-4 g-4"> {ringCollection.map(ring => <HomeSingleRing
                        key={ring._id}
                        singleRing={ring}>
                    </HomeSingleRing>)}
                </div> : <div className="me-auto">
                    <div className="spinner-border" style={{ width: "10rem", height: "10rem" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </div>
    );

};

export default HomeCollection;