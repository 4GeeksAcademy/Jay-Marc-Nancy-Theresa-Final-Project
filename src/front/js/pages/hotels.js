import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/hotels.css";
import springfield from "../../img/springfield.jpg";
import { HotelCard } from "../component/hotelCard";

export const Hotels = () => {
    const { store } = useContext(Context);
 
    return (
        <>
			<div className="container text-center">
				<div className="row">
                    <div className="aboutJumbotron bg-light p-4 rounded-lg mb-4">
                        <img src={springfield} />
                        <div className="jumbotronContent text-start">
                            <h1 className="badaboom font-spidey-yellow textBorderDarkBlue fs4p0 ms-1">Where the Heck Should You Sleep?!</h1>
                            <h2 className="fs2p0 font-spidey-lightRed textBorderBlack">This Page Highlights Some Nearby Lodging Accommodations</h2>
                            <h4 className="fs1p25 font-white textBorderBlack">
								<p>From all the geeks behind the scenes at the Worst Convention EverCon, thank you for your interest in coming to enjoy out convention.</p>
								<p>To make things simpler and so you can focus on the important stuff (having fun at the convention, duh!) we have provided this list of our favorite nearby hotel and lodging venues. Below is a streamlined list of some nifty lodging options nearby to limit footsteps and increase your time enjoying the exhibits, artists, and activities!</p>
								<p>Special requests? We've got you in mind. Our accessibility rating can help you decide on the venue that may work best for you.</p>
								<p>Once again, thank you and we hope you enjoy our convention.</p>
							</h4>
                        </div>
                    </div>
                </div>

				<div className="row">


					{store.hotels.map((item,index) => 

						<HotelCard 
							key={index}
							hotelNickname={item.hotelNickname}
							hotelUrl={item.hotelUrl}
							hotelImgUrl={item.hotelImgUrl}
							hotelName={item.hotelName}
							hotelAddress={item.hotelAddress}
							hotelDescription={item.hotelDescription}
							hotelPriceRate={item.hotelPriceRate}
							hotelRating={item.hotelRating}
							hotelAccessibilityRating={item.hotelAccessibilityRating}
						/>

						// <div className="col-4 my-2" key={index}>
						// 	<div className="hotelCardContainer card text-center bg-secondary text-warning border border-danger">
						// 		<div className="card-header">
						// 			<h3 className="hotelCardHeader">{item.hotelNickname}</h3>
						// 		</div>								
						// 			<div className="card-body m-0 p-0">
						// 				<a href={item.hotelUrl} target="_blank">
						// 					<img className="hotelIMG" src={item.hotelImgUrl} />
						// 				</a>
						// 				<h4 className="mt-3">{item.hotelName}</h4>
						// 				<h5 className="card-text">
						// 					{item.hotelAddress}
						// 				</h5>
						// 				<p className="card-text m-3">
						// 					{item.hotelDescription}
						// 				</p>
						// 				<a href={item.hotelUrl} target="_blank" className="btn btn-primary mb-3">Book this for ${item.hotelPriceRate} per night!</a>
						// 			</div>
						// 		<div className="row card-footer text-body-secondary">
						// 			<div className="col fw-bolder">
						// 				Hotel Rating
						// 				<br />
						// 				{item.hotelRating}
						// 			</div>
						// 			<div className="col fw-bolder">
						// 				Accessibility Rating
						// 				<br />
						// 				{item.hotelAccessibilityRating}
						// 			</div>									
						// 		</div>
						// 	</div>
						// </div>
					)}


				</div>
			</div>
        </>
    );
};