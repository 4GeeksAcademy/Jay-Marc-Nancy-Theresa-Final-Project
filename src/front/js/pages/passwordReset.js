import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const PasswordReset = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState();
    const navigate = useNavigate()
    function submitNewPassword() {
        if (newPassword != confirmPassword) {
            setError("Passwords do not match")
        }
        actions.resetPassword(email, newPassword, confirmPassword)
    }


    return (
        <>
            <div className="container">
                <h1>Password Reset</h1>
                <input
                    type="text"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></input>
                <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}></input>
                <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}></input>
                <button
                    type="submit"
                    onClick={submitNewPassword}>Reset Password</button>
            </div>


        </>

    );
}