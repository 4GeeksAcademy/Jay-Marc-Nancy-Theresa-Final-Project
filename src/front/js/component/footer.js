import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/footer.css";

export const Footer = () => {
	const { store, actions } = useContext(Context);
	const [nerdFact, setNerdFact] = useState("")

	useEffect(() => {
		actions.getNerdFact();
	}, []);

	return (
			<div className="footerStyling container-fluid">
				<div className="row">
					<div className="col-5 ps-5 text-start m-0">
						<div className="container-fluid">
							<div className="row">
								<div className="col comicBookGuyCol">
									<img src={store.nerdFact.image} className="comicBookGuyImg" />
								</div>
								<div className="col nerdFactCol">
									<div className="box sb2">{store.nerdFact.quote}</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-1 text-start m-0">
						&nbsp;
					</div>
					<div className="col-1 align-self-center">				
						<div className="containerx">
							<div className="worstBox badaboom font-red fs1p75 text-start">
								Worst.
							</div>
							<div className="worstBox conventionBox badaboom font-yellow fs1p75 text-start">
								Convention. 
							</div>
							<div className="worstBox conventionBox everconBox badaboom font-white fs1p75 text-start">
								Evercon.
							</div>
						</div>
					</div>
					<div className="col-3 ps-5 align-self-center text-start">
						<font className="fs0p75">
							Brought to you by<br />
							<a href="https://github.com/labs404" target="_blank">Jay</a>, <a href="https://github.com/NJCampbell" target="_blank">Nancy</a>, and <a href="https://github.com/thatreligionmajor" target="_blank">Theresa</a><br />
							4Geeks Academy Class of 2023
						</font>
					</div>
					<div className="col-2 text-center align-self-center">
						<a href="#app">
							<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
							</svg> Back to top
						</a>
					</div>
				</div>
			</div>
	);
};