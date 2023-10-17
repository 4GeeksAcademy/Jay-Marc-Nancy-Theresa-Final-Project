import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";
import conlogoText from "../../img/conlogoText.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="navContainer navbarManualBottomMargin">
			{/* need to convert anchor tags to link */}
			<nav className="navbar navbar-expand-lg bg-body-tertiary" id="primaryNav">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						<img src={conlogoText} className="navLogo" alt="banner" />
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" style={{ color: "#f8f7f7" }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
									People to See
								</a>
								<ul className="dropdown-menu">
									<li><Link to="/featured" className="dropdown-item" style={{ color: "black" }}>Featured</Link></li>
									<li><Link className="dropdown-item font-grey" style={{ color: "black" }}>Guests <sup>Coming Soon!</sup></Link></li>
									{/* <li><a className="dropdown-item" href="#"></a></li> */}
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" style={{ color: "#f8f7f7" }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Things to Do
								</a>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item font-grey" style={{ color: "black" }}>What to do at Worst Convention EverCon <sup>Coming Soon!</sup></Link></li>
									<li><Link to="/schedule" className="dropdown-item" style={{ color: "black" }}>Schedule</Link></li>
									<li><Link to="/vendors" className="dropdown-item" style={{ color: "black" }}>Vendors</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" style={{ color: "#f8f7f7" }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Travel
								</a>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item font-grey" style={{ color: "black" }}>Transportation <sup>Coming Soon!</sup></Link></li>
									<li><Link to="/hotels" className="dropdown-item" style={{ color: "black" }}>Hotels</Link></li>
									{/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" style={{ color: "#f8f7f7" }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Resources
								</a>
								<ul className="dropdown-menu">
									<li><Link to="new-releases" className="dropdown-item" style={{ color: "black" }}>New Releases</Link></li>
									{/* <li><a className="dropdown-item" href="#">Another action</a></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li> */}
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" style={{ color: "#f8f7f7" }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Participate
								</a>
								<ul className="dropdown-menu">
									<li><Link to="/signup" className="dropdown-item" style={{ color: "black" }}>Signup</Link></li>
									<li><Link to="/login" className="dropdown-item" style={{ color: "black" }}>Login</Link></li>
									<li><Link to="/private" className="dropdown-item" style={{ color: "black" }}>Account Dashboard</Link></li>



									{/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}

								</ul>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" style={{ color: "#f8f7f7" }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
									About
								</a>
								<ul className="dropdown-menu">
									<li><Link to="/about-contact" className="dropdown-item" style={{ color: "black" }}>About/Contact Us</Link></li>
									<li><Link to="/FAQ" className="dropdown-item" style={{ color: "black" }}>FAQs</Link></li>
									{/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
								</ul>
							</li>
						</ul>
						<div className="ml-auto">
							{!store.token ?
								<Link to="/login">
									<button className="btn" style={{ color: "#f7d281" }}>Login</button>
								</Link>
								:
								<Link to="/">
									<button onClick={() => actions.logout()} className="btn" style={{ color: "#f7d281" }}>Logout</button>
								</Link>
							}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
