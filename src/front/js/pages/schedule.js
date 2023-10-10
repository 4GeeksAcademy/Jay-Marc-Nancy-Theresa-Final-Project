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
                <button className="nav-link eventNavLink text-secondary active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                    Favorites
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link eventNavLink text-secondary" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                    Table
                </button>
            </li>
            </ul>
            <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
            {/* Page View */}
            <div className="container">
                <div className="row-odd">
                    <div className="col-12">
                    {store.events.map((event, index) =>              
                        <div className="event event-panel" key={index}>
                            <div className="eventsContainer">
                                <div className="event-banner"><b>Title:</b> {event.event_name}</div>
                                <div className="event-date"><b>Date:</b> {event.date}</div> 
                                <div className="event-start-time"><b>Start:</b> {event.start_time}</div>
                                <div className="event-end-time"><b>End:</b> {event.end_time}</div>
                                <div className="event-location"><b>Location:</b> {event.location}</div>
                                <div className="event-description"><b>Description:</b> {event.description}</div>
                            </div>
                            <div className="favoritesContainer">
                                <button className="eventFavoriteButton" onClick={()=>actions.addFavorite(event.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                    </svg>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                    </svg> */}
                                </button>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            </div>
            {/* Table View */}
            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
            <div className="row row-key text-secondary">
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