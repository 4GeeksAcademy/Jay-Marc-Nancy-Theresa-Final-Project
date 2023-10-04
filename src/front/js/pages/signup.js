import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
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
        <div className="text-center mt-5" id="signupContainer">
            <h1 className="my-3">Create Account</h1>
            <div className="mb-3 row">
                <label htmlFor="first_name" className="col-sm-2 col-form-label" >First Name:</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="controlled-input"
                        id="first_name"
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="last_name" className="col-sm-2 col-form-label" >Last Name:</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="controlled-input"
                        id="last_name"
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="phone" className="col-sm-2 col-form-label" >Phone:</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="controlled-input"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="email" className="col-sm-2 col-form-label" >Email:</label>
                <div className="col-sm-10">
                    <input
                        type="email"
                        className="controlled-input"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password:</label>
                <div className="col-sm-10">
                    <input
                        type="password"
                        className="controlled-input"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <Link to="/login">
                <button onClick={submitRequest}>Submit</button>
            </Link>
            <div>
                {error != null && error}
                {error != null && <Link to="/login">Login</Link>}
            </div>

        </div>
    );
};

