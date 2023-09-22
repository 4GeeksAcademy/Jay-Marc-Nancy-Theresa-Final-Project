import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/schedule.css";
import "../../../../data.json";


export const Calendar = () => {
	const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getEvents();   
    })

	return (
        <div className="container">
            {/* <Navbar /> */}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Page</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Table</button>
            </li>
            </ul>
            <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
            {/* Page View */}
            <div className="container">
                <div className="row-odd">
                    <div className="col-2">
                    One of three columns
                    </div>
                    <div className="col-8">
                    {store.events.map((event, index) => 
                        <div className="event-panel ep1" key={index}>
                            <div className="event-banner">Title: {event.event_name}</div>
                            <div className="event event-date">Date: {event.date}</div> 
                            <div className="event event-start-time">Start: {event.start_time}</div>
                            <div className="event event-end-time">End: {event.end_time}</div>
                            <div className="event event-location">Location: {event.location}</div>
                            <div className="event event-description">Description: {event.description}</div>
                        </div>
                        )}
                    </div>
                    <div className="col-2">
                    Three of three columns
                    </div>
                </div>
            </div>
            </div>
            {/* Table View */}
            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
            <div className="row row-key">
                <div className="col-2">
                    Date
                </div>
                <div className="col-1">
                    Start 
                </div>
                <div className="col-1">
                    End 
                </div>
                <div className="col-2">
                    Event
                </div>
                <div className="col-2">
                    Location
                </div>
                <div className="col-4">
                    Description
                </div>
            </div>
            {store.events.map((event, index) => 
                <div className="row row-odd" key={index}>
                    <div className="col-2">
                        {event.date}
                    </div>
                    <div className="col-1">
                        {event.start_time}
                    </div>
                    <div className="col-1">
                        {event.end_time}
                    </div>
                    <div className="col-2">
                        {event.event_name}
                    </div>
                    <div className="col-2">
                        {event.location}
                    </div>
                    <div className="col-4">
                        {event.description}
                    </div>
                </div>
            )}
            </div>
            </div>
        </div>
    );
};