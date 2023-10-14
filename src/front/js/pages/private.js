import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/private.css";


export const Private = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const { event_id } = useParams();
    const parsedEventId = parseInt(event_id);

    useEffect(() => {
        if (store.token && store.token !== "" && store.token !== undefined ?
            navigate("/private")
            : navigate("/login"));
    }, [store.token]);

    useEffect(() => {
        actions.getFavorites();
    }, [store.token]);

    const getEventName = (eventId) => {
        const event = store.events.find(event => event.id === eventId);
        return event ? event.event_name : '';
    };

    return (
        <div className="dashboard-wrapper text-center mt-5">
            <h1 className="fs2p0 badaboom font-spidey-yellow textBorderBlack">Welcome to your account dashboard!</h1>
            <p>From your account dashboard you can view and edit your bookmarked favorites.</p>
            <h2 className="fs2p0 badaboom font-spidey-yellow textBorderBlack">My Favorites</h2>
            <div className="favorites-container">
                {store.currentUser?.favorites.map((item, index) => (
                    <div key={index} className="font-white bgYellow m-3">
                        <div className="row favorite-items">
                            <div className="col-8">
                                {getEventName(item.event_id)}<br />
                                <hr className="favesDivider"></hr>
                            </div>
                            <div className="col-4">
                                {/* {item.event_id}<br /> */}
                                <button className="deleteButton" onClick={() => actions.deleteFavorite(item.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};