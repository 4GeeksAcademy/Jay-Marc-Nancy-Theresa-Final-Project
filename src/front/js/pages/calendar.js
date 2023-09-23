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
            <h1>Schedule</h1>
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
                {/* <div className="col-2">
                    Location
                </div>
                <div className="col-4">
                    Description
                </div> */}
            </div>
            {store.events.map((event, index) => 
                <div className="row row-odd accordian-event" key={index}>

<div class="accordion" id="accordionExample">
<div class="accordion-item">
    <h2 class="accordion-header" id={event.id}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={String('#collapsebox' + event.id)} aria-expanded="false" aria-controls={event.id}>
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
    <div id={String('collapsebox' + event.id)} class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
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

                    {/* <div className="col-2">
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
                    </div> */}
                </div>
            )}
            </div>
            </div>
        </div>
    );
};