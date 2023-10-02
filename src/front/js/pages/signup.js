import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const navigate = useNavigate()
    function submitRequest() {
        actions.getUserAdded(email, password)
    }

    useEffect(() => {
        if (store.message != null && store.message != '') {
            setError(store.message)
        }
    }, [store.message])

    return (
        <div className="text-center mt-5" id="signupContainer">
            <h1 className="my-3">Welcome! Please Signup</h1>
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
=======
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Signup = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (
        <div className="jumbotron">
        </div>
    );
};

