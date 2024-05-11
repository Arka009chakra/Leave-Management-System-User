import React, { useState } from "react";
import p1 from './p1.png';

function Apply() {
    const [cemail, setCemail] = useState("");
    const [leave, setLeave] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:3300/apply', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Fixed typo: 'Application.json' to 'application/json'
            },
            body: JSON.stringify({
                cemail,
                leave
            })
        })
        .then(res => res.json())
        .then(res1 => {
            alert('Insert successful!!'); // Fixed typo: 'insert successful!!' to 'Insert successful!!'
        })
        .catch(err => {
            alert("Error");
        });
    }

    return (
        <div className="container-fluid">
            <div className="text-center">
                <h1>
                    <strong className="brand-name">ArkaTechnical</strong>
                </h1>
            </div>
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Company Email address</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setCemail(e.target.value)} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Leave</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setLeave(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Apply;
