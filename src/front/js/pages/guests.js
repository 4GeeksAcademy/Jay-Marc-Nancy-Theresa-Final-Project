import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/guests.css";


export const Guests = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="jumbotron">


			<button className="popArtButton" role="button">Button 52</button>



			<h1>hello from guests</h1>
			{store.token && store.token != "" && store.token != undefined ? 
			<p>token is {store.token}</p>
			:
			<p>no token</p>
			}
			
		</div>
	);
};