import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	useEffect(() => {
		actions.fetchGetAllComicVendors()
	}, [])

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<ul>
				{store.comicVendors.map((vendor, idx) => <li key={idx}>{vendor.name}</li>)}
			</ul>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p>
		</div>
	);
};
