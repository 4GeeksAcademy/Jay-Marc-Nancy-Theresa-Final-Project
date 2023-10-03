import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Featured = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
        <p>Hello from featured (exclaim)</p>
        {console.log("integrated data.json to store!!",store.events)}
        </>
    );
};