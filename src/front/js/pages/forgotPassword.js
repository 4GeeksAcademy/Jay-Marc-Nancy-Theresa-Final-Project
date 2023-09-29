import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const ForgotPassword = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleForgotPassword = (e) => {
        e.preventDefault();
        actions.forgotPassword(email)
    };

    return (
        <>
            <div className="container">
                <div align="center">
                    <h1>Forgot Password</h1>
                    <input
                        type="text"
                        placeholder="enter email"></input>
                    <button onClick={handleForgotPassword}>Login</button>
                </div>
            </div>
        </>
    )
}