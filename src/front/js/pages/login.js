import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";

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
            <div className="login-box">
                {(store.token && store.token !== "" && store.token !== undefined) ? "You are logged in with token"
                    :
                    <div align="center">
                        <h1>Login</h1>
                        <div className="user-box">
                            <input
                                type="text"
                                value={email}
                                placeholder="enter email" onChange={e => setEmail(e.target.value)}></input>
                        </div>
                        <div className="user-box">
                            <input
                                type="password"
                                value={password}
                                placeholder="enter password" onChange={e => setPassword(e.target.value)}></input>
                        </div>
                        <button onClick={handleLogin}>Login
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
        </>
    )
}


