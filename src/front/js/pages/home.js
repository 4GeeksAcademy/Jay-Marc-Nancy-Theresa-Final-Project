import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="wrapper" style={{ textAlign: "center" }}>
			<div className="container-fluid banner">
				<img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/comic-con-design-template-a4d098fe3d831d0861dc0d22b533c0cf_screen.jpg?ts=1620897200" alt="banner" />

			</div>
			<div className="countdown-timer my-3">102 Days 15 Hours 26 Minutes</div>
			<div>
				<button className="btn btn-caution mx-3">
					<Link to="/guest-form"></Link>
					Purchase Tickets!
				</button>
				<button className="btn btn-caution mx-3">
					<Link to="/transportation"></Link>
					Plan Your Trip!</button>
				<button className="btn btn-caution mx-3">
					<Link to="/guest-form"></Link>
					Join the Mailing List!</button>
			</div>
			<div className="blurb-container my-3">
				About the Convention blurb lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
				accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo
				duiLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
				eleifend gravida, nulla nunc varius lectus, nec rutrum justo duiLorem ipsum dolor sit.
			</div>


		</div>
	);
};
