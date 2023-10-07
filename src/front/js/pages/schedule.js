import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/schedule.css";

export const Schedule = () => {
	const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getEvents();   
    })

	return (
        <div className="container">
            {/* make jumbotron a component for this file and for vendors */}
            <div className="vendorJumbotron bg-light p-5 rounded-lg m-3">
                <img src="https://images.unsplash.com/photo-1555725305-e823b44548de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"></img>
                <div className="jumbotronContent">
                    <h1 className="display-4" id="scheduleJumbotronTitle">Schedule</h1>
                    <p className="lead">Learn and Grow</p>
                    <hr className="my-4"></hr>
                    <p>Expand your horizons with a wide range of informative panels and workshops. Discover the secrets of comic book creation, explore the latest trends in pop culture, and gain insights into the worlds of gaming, sci-fi, and fantasy.</p>
                </div>
            </div>
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
                    {/* One of three columns */}
                    </div>
                    <div className="col-8">
                    {store.events.map((event, index) =>              
                        <div className="event event-panel" key={index}>
                            <div className="event-banner"><b>Title:</b> {event.event_name}</div>
                            <div className="event-date"><b>Date:</b> {event.date}</div> 
                            <div className="event-start-time"><b>Start:</b> {event.start_time}</div>
                            <div className="event-end-time"><b>End:</b> {event.end_time}</div>
                            <div className="event-location"><b>Location:</b> {event.location}</div>
                            <div className="event-description"><b>Description:</b> {event.description}</div>
                        </div>
                        )}
                    </div>
                    <div className="col-2">
                    {/* Three of three columns */}
                    </div>
                </div>
            </div>
            </div>
            {/* Table View */}
            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
            <div className="row row-key">
                <div className="col-3 accordion-element-spacing table-head">
                    Date
                </div>
                <div className="col-3 accordion-element-spacing table-head">
                    Start 
                </div>
                <div className="col-3 accordion-element-spacing table-head">
                    End 
                </div>
                <div className="col-3 accordion-element-spacing table-head">
                    Event
                </div>
            </div>
            <div className="table-wrapper">
            {store.events.map((event, index) => 
                <div className="row accordion-event" key={index}>
                    <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id={event.id}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={String('#collapsebox' + event.id)} aria-expanded="false" aria-controls={event.id}>
                            <div className="row">
                                <div className="col-3 accordion-element-spacing">
                                    {event.date}
                                </div>
                                <div className="col-3 accordion-element-spacing">
                                    {event.start_time}
                                </div>
                                <div className="col-3 accordion-element-spacing">
                                    {event.end_time}
                                </div>
                                <div className="col-3 accordion-element-spacing">
                                    {event.event_name}
                                </div>
                            </div>
                        </button>
                        </h2>
                        <div id={String('collapsebox' + event.id)} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="col-2 full-accordion">
                                        {event.location}
                                </div>
                                <div className="col-6 full-accordion full-accordion-description">
                                    {event.description}
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            )}
            </div>
            </div>
            </div>
        </div>
    );
};