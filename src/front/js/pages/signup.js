import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/signup.css";
import groot from "../../img/groot.jpg";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const [message, setMessage] = useState();
    const [token, setToken] = useState();
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [phone, setPhone] = useState();
    const navigate = useNavigate()
    function submitRequest() {
        actions.getUserAdded(email, password, first_name, last_name, phone)
    }

    useEffect(() => {
        if (store.message != null && store.message != '') {
            setError(store.message)
        }
    }, [store.message])

    return (
        <div className="signup-wrapper">
            <div className="row" id="signup-box">
                <div className="col-6" id="signup-form">
                    <h1 className="fs2p0 badaboom font-spidey-yellow textBorderBlack my-3">Create Account</h1>
                    <div className="mb-3 row">
                        {/* <label htmlFor="first_name" className="col-sm-2 col-form-label" >First Name:</label> */}
                        <div className="col-sm-10">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="controlled-input"
                                id="first_name"
                                value={first_name}
                                onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        {/* <label htmlFor="last_name" className="col-sm-2 col-form-label" >Last Name:</label> */}
                        <div className="col-sm-10">
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="controlled-input"
                                id="last_name"
                                value={last_name}
                                onChange={(e) => setLastName(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        {/* <label htmlFor="phone" className="col-sm-2 col-form-label" >Phone:</label> */}
                        <div className="col-sm-10">
                            <input
                                type="text"
                                placeholder="Phone"
                                className="controlled-input"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        {/* <label htmlFor="email" className="col-sm-2 col-form-label" >Email:</label> */}
                        <div className="col-sm-10">
                            <input
                                type="email"
                                placeholder="Email"
                                className="controlled-input"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        {/* <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password:</label> */}
                        <div className="col-sm-10">
                            <input
                                type="password"
                                placeholder="Password"
                                className="controlled-input"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="row" id="signup-buttons">
                        <div className="col">
                            <Link to="/login">
                                <button className="button-53" onClick={submitRequest}>Submit</button>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/login">
                                <button className="button-53">Cancel</button>
                            </Link>
                        </div>
                        <div>
                            {error != null && error}
                            {error != null && <Link to="/login">Login</Link>}
                        </div>

                    </div>
                </div>


                <div className="col-6">
                    <img src={groot} className="groot" alt="groot" />
                </div>



            </div>
        </div>
    );
};

