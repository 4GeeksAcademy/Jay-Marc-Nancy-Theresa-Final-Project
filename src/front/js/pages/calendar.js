import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Calendar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<body>
                <h1>Events</h1>
                <h2 className="row row-title">Calendar View</h2>
                <div className="row cards-row">
                    {store.events.map((event_name, index) => <Card key={index} event_name={event_name} index={index}/>)}
                </div>
            </body>
		</div>
	);
};

//to do: navpills to toggle between calendar and table view