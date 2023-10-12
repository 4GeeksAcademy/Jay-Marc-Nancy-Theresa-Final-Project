import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";
import deadpool from "../../img/deadpool.jpg";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        actions.login(email, password)
        // .then(() => {
        //     navigate("/private");
        // })
    };

    // this replaces the .then() above
    if (store.token && store.token !== "" && store.token !== undefined) {
        navigate("/private");
    }
    return (
        <>
            <div className="login-wrapper">
                <div className="login-box">
                    <div className="row">
                        <div className="col-6">
                            <img src={deadpool} className="loginImg" alt="avatar" />
                        </div>
                        <div className="col-6">
                            {(store.token && store.token !== "" && store.token !== undefined) ? "You are logged in."
                                :
                                <div align="center">
                                    <h1>Login</h1>
                                    <div className="user-box my-3">
                                        <input
                                            type="text"
                                            value={email}
                                            placeholder="Email" onChange={e => setEmail(e.target.value)}></input>
                                    </div>
                                    <div className="user-box my-3">
                                        <input
                                            type="password"
                                            value={password}
                                            placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
                                    </div>
                                    <button className="loginPageButton" onClick={handleLogin}>Login
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>



                                    {/* <button onClick={() => navigate("/signup")}>Signup</button> */}
                                    {/* <button onClick={() => navigate("/forgot-password")}>Forgot Password</button> */}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


