import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const Private = () => {
    const { store } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (store.token && store.token !== "" && store.token !== undefined ?
            navigate("/private")
            : navigate("/login"));
    }, [store.token]);

    return (
        <div className="text-center mt-5">
            {console.log(store.favorites)}
            <h1>Welcome to your account dashboard!</h1>
            <p>From your account dashboard you can view your bookmarked favorites.</p>
            <h2>My Favorites</h2>
            <div className="row">
                {store.currentUser && store.favorites.map((item, index) => {
                    return (
                        <div className="card col-3" key={index}>

                            <div className="card-body">
                                <h5 className="card-title">{item.event_name}</h5>
                            </div>
                        </div>
                    )
                }
                )}
            </div>

        </div>
    )
};

