import React, { useState, useEffect } from 'react';
import p1 from './p1.png';
import { useNavigate } from 'react-router';

function Leave() {
    const navigate = useNavigate();
     const [data,setData] = useState()
    useEffect(() => {
        // Fetch data when component mounts
        const cemail = localStorage.getItem("email");
        fetch('http://localhost:3300/get', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Fix: 'Application/json' to 'application/json'
            },
            body: JSON.stringify({
                cemail: cemail
            })
        })
        .then(res => res.json())
        .then(res1 => setData(res1.leave))
        .catch(err => {
            console.error("Error fetching data:", err);
            alert("Error fetching data"); // Show alert on error
        });
    }, []); // Empty dependency array to run only once on mount

    return (
        <div className="container-fluid nav-bg">
            <div className="row">
                <div className="col-10 mx-auto pt-5">
                    <div className="row">
                        <div className="col-lg-6 my-6 d-flex justify-content-center flex-column order-1">
                            <div className="d-flex flex-column align-items-center mb-3">
                                <div>Total Leave:<b>{data}</b></div>
                                <button className="btn btn-primary mt-3" onClick={() => navigate('/apply')}>Apply Leave</button>
                                {/* Assuming '/apply-leave' is the route to the apply leave page */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={p1} className="img-fluid animated-image with-margin-top" alt="home-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leave;
