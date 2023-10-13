import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/private.css";


export const Private = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (store.token && store.token !== "" && store.token !== undefined ?
            navigate("/private")
            : navigate("/login"));
    }, [store.token]);

    // useEffect(() => {
    //     // actions.getFavorites();
    //     // actions.deleteFavorite();
    // }, []);

    return (
        <div className="dashboard-wrapper text-center mt-5">
            <h1>Welcome to your account dashboard!</h1>
            <p>From your account dashboard you can view your bookmarked favorites.</p>
            <h2>My Favorites</h2>
            <div className="favorites-container">

                {store.currentUser?.favorites.map((item, index) =>
                    <div key={index} className="font-white bgYellow m-3">
                        <div className="favorite-items">
                            {item.event_name}<br />
                            {/* {item.event_id}<br /> */}

                            {/* {item.favorite_type}<br /> */}
                            {/* {item.user_id}<br /> */}
                        </div>
                        <button className="deleteButton" onClick={() => actions.deleteFavorite(item.id)}>Delete</button>
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