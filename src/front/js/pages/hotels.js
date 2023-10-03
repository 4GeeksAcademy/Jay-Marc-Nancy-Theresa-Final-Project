import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Hotels = () => {
    const { store } = useContext(Context);

    return (
        <>
			<div className="container text-center">
				<div className="row">
					<div className="col-12 text-start">
						<h1>Worst Convention EverCon</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-12 text-start">
						<h2>Nearby Accomodations, Hotels, and Lodging</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-12 text-start">
						<p>From all the geeks behind the scenes at the Worst Convention EverCon, thank you for your interest in coming to enjoy out convention.</p>
						<p>To make things simpler and so you can focus on the important stuff (having fun at the convention, duh!) we have provided this list of our favorite nearby hotel and lodging venues. Below is a streamlined list of some nifty lodging options nearby to limit footsteps and increase your time enjoying the exhibits, artists, and activities!</p>
						<p>Special requests? We've got you in mind. Our accessibility rating can help you decide on the venue that may work best for you.</p>
						<p>Once again, thank you and we hope you enjoy our convention.</p>
					</div>
				</div>
				<div className="row">
					{store.hotels.map((item,index) => 
						<div className="col-4 my-2" key={index}>
							<div className="hotelCardContainer card text-center bg-secondary text-warning border border-danger">
								<div className="card-header">
									<h3 className="hotelCardHeader">{item.hotelNickname}</h3>
								</div>								
									<div className="card-body m-0 p-0">
										<a href={item.hotelUrl} target="_blank">
											<img className="hotelIMG" src={item.hotelImgUrl} />
										</a>
										<h4 className="mt-3">{item.hotelName}</h4>
										<h5 className="card-text">
											{item.hotelAddress}
										</h5>
										<p className="card-text m-3">
											{item.hotelDescription}
										</p>
										<a href={item.hotelUrl} target="_blank" className="btn btn-primary mb-3">Book this for ${item.hotelPriceRate} per night!</a>
									</div>
								<div className="row card-footer text-body-secondary">
									<div className="col fw-bolder">
										Hotel Rating
										<br />
										{item.hotelRating}
									</div>
									<div className="col fw-bolder">
										Accessibility Rating
										<br />
										{item.hotelAccessibilityRating}
									</div>									
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
        </>
    );
};