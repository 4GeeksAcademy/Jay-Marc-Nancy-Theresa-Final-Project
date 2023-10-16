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
    }, []);

    const getEventName = (eventId) => {
        const event = store.events.find(event => event.id === eventId);
        return event ? event.event_name : '';
    };

    const getEventTime = (eventId) => {
        const event = store.events.find(event => event.id === eventId);
        return event ? event.start_time : '';
    };

    const getEventDate = (eventId) => {
        const event = store.events.find(event => event.id === eventId);
        return event ? event.date : '';
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
                            <div className="col-12">
                                {getEventName(item.event_id)}<br />
                                {getEventDate(item.event_id)}<br />
                                {getEventTime(item.event_id)}

                            </div>
                            <div>

                            </div>
                            <div className="row">
                                <div className="col-12 my-2">
                                    {/* {item.event_id}<br /> */}
                                    <p>Reserve your spot!</p>
                                    <button className="button-55 mx-3" id="reserveButton">Buy</button>
                                    <button className="button-55" id="deleteButton" onClick={() => actions.deleteFavorite(item.id)}>Remove</button>
                                </div>
                                <hr className="favesDivider"></hr>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};