import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const Private = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (store.token && store.token !== "" && store.token !== undefined ?
            navigate("/private")
            : navigate("/login"));
    }, [store.token]);

    useEffect(() => {
        actions.getFavorites();
    }, []);

    return (
        <div className="text-center mt-5">
            <h1>Welcome to your account dashboard!</h1>
            <p>From your account dashboard you can view your bookmarked favorites.</p>
            <h2>My Favorites</h2>
            <div className="row">

                {store.favorites && store.favorites.map && store.favorites.map((item, index) =>
                    <div key={index} className="font-white bgYellow m-3">
                        {item.event_id}<br />
                        {item.favorite_type}<br />
                        {item.user_id}<br />
                    </div> 
                )}
                
            </div>
        </div>
    )
};

// {item.event_id}<br />
// {item.event_name}<br />
// {item.favorite_type}<br />
// {item.magic_id}<br />
// {item.magic_name}<br />
// {item.user_id}<br />