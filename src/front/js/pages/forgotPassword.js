import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const ForgotPassword = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    // const location = useLocation();
    const searchParams = new URLSearchParams(window.location.search);

    const handleForgotPassword = (e) => {
        e.preventDefault();
        actions.forgotPassword(searchParams.get("email", "token"))
    };

    return (
        <>
            <div className="container">
                <div align="center">
                    <h1>Forgot Password?</h1>
                    <input
                        type="text"
                        placeholder="enter email"></input>
                    <button onClick={handleForgotPassword}>Reset Password</button>
                    <button onClick={() => navigate("/login")}>Login</button>
                </div>
            </div>
        </>
    )
}