import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

import { Context } from "../store/appContext";

export const ForgotPassword = () => {
    const form = useRef();
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_okvibjm', 'reset_password', form.current, 'UfJOkgaaOPu1K3y_Q')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <label>Email</label>
                <input type="email" name="user_email" />
                <input type="submit" value="Send" />
            </form>
            {/* <div className="container">
                <div align="center">
                    <h1>Forgot Password?</h1>
                    <input
                        type="text"
                        placeholder="enter email"></input>
                    <button type="submit" value="Send" onClick={sendEmail}>Reset Password</button>
                    <button onClick={() => navigate("/login")}>Login</button>
                </div>
            </div> */}
        </>
    )
}

