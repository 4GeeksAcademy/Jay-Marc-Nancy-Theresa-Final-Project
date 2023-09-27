import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

let hotelsArray = [
	{
	"id": 1,
	"hotelName": "Holiday Inn Express & Suites Springfield-Medical District",
	"hotelAddress": "310 E Monastery St, Springfield, MO 65810",
	"hotelPriceRate": "153",
	"hotelRating": "*****",
	"hotelAccessibilityRating": "*****",
	"hotelImgUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_379,q_75,w_629/v1/crm/springfield/65759_664_b2dcd77b-5056-a348-3af884b890168113.jpg",
	"hotelUrl": "https://www.ihg.com/holidayinnexpress/hotels/us/en/springfield/sgfry/hoteldetail",
	"hotelDescription": "Located in the heart of Springfield, this Holiday Inn Express is within a few blocks from the steps of the convention and within walking distance of the critically acclaimed Krusty Burger.",
	"hotelNickname": "The Krusty Experience"
	},
	{
	"id": 2,
	"hotelName": "Homewood Suites by Hilton Springfield",
	"hotelAddress": "7010 Old Keene Mill Rd, Springfield, VA 22150",
	"hotelPriceRate": "160",
	"hotelRating": "****",
	"hotelAccessibilityRating": "****",
	"hotelImgUrl": "https://www.familyvacationcritic.com/wp-content/uploads/sites/19/2017/05/hotel-exterior-at-night-8-1280x640.jpg",
	"hotelUrl": "https://www.hilton.com/en/hotels/dcasfhw-homewood-suites-springfield-va/",
	"hotelDescription": "Homewood Suites is a block off the main drag and perfect for anybody looking for a bit more quiet and seclusion. Free property wide wi-fi and a rooftop pool are key features to keep in mind.",
	"hotelNickname": "Best for Inner Peace & Quiet"
	},
	{
	"id": 3,
	"hotelName": "Wyndham Springfield City Centre",
	"hotelAddress": "700 E Adams St, Springfield, IL 62701",
	"hotelPriceRate": "99",
	"hotelRating": "***",
	"hotelAccessibilityRating": "*****",
	"hotelImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/22/c1/1b/19/exterior.jpg",
	"hotelUrl": "https://www.wyndhamhotels.com/wyndham/springfield-illinois/wyndham-springfield-city-centre/overview",
	"hotelDescription": "If distance is your concern the Wyndham in City Center is right across the street from the convention! Easy accessibility, but with the great location comes heavy foot traffic. This hotel is perfect for accessibility and mobility options, but fills up quick -- so book quickly if this fits your bill! ",
	"hotelNickname": "Right Across the Street"
	},
	{
	"id": 4,
	"hotelName": "La Quinta Inn & Suites by Wyndham",
	"hotelAddress": "100 Congress St, Springfield, MA 01104",
	"hotelPriceRate": "139",
	"hotelRating": "**",
	"hotelAccessibilityRating": "**",
	"hotelImgUrl": "https://www.wyndhamhotels.com/content/dam/property-images/en-us/lq/us/fl/orlando/53746/53746_exterior_view_4.jpg",
	"hotelUrl": "https://www.wyndhamhotels.com/laquinta/somerville-massachusetts/la-quinta-boston-somerville/overview",
	"hotelDescription": "If you're okay with a little bit more of a venture and perhaps the best features to value ratio, La Quinta should be your top contender ikn Springfield. Great price, scenic walk, and lots of off-the-beaten-path shops nearby.",
	"hotelNickname": "Ammenities to Value Ratio"
	},
	{
	"id": 5,
	"hotelName": "Country Inn & Suites by Radisson",
	"hotelAddress": "1751 W 1st St, Springfield, OH 45504",
	"hotelPriceRate": "107",
	"hotelRating": "*",
	"hotelAccessibilityRating": "*",
	"hotelImgUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/232821010.jpg?k=98a3d809b17cb64b8810363826677e6d164c06d53ade75ba9731cf6036fc67af&o=&hp=1",
	"hotelUrl": "https://www.choicehotels.com/ohio/dayton/country-inn-suites-hotels/oh233",
	"hotelDescription": "If you're on a budget the Country Inn is your best value in the market. If your primary focus is a bed to sleep in and a warm shower then this no frills location is just right to keep you fresh and engaged at the convention.",
	"hotelNickname": "Won't Break the Bank"
	},
	{
		"id": 6,
		"hotelName": "Holiday Inn Express & Suites Springfield-Medical District",
		"hotelAddress": "310 E Monastery St, Springfield, MO 65810",
		"hotelPriceRate": "153",
		"hotelRating": "*****",
		"hotelAccessibilityRating": "*****",
		"hotelImgUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_379,q_75,w_629/v1/crm/springfield/65759_664_b2dcd77b-5056-a348-3af884b890168113.jpg",
		"hotelUrl": "https://www.ihg.com/holidayinnexpress/hotels/us/en/springfield/sgfry/hoteldetail",
		"hotelDescription": "Located in the heart of Springfield, this Holiday Inn Express is within a few blocks from the steps of the convention and within walking distance of the critically acclaimed Krusty Burger.",
		"hotelNickname": "The Krusty Experience"
		},
		{
		"id": 7,
		"hotelName": "Homewood Suites by Hilton Springfield",
		"hotelAddress": "7010 Old Keene Mill Rd, Springfield, VA 22150",
		"hotelPriceRate": "160",
		"hotelRating": "****",
		"hotelAccessibilityRating": "****",
		"hotelImgUrl": "https://www.familyvacationcritic.com/wp-content/uploads/sites/19/2017/05/hotel-exterior-at-night-8-1280x640.jpg",
		"hotelUrl": "https://www.hilton.com/en/hotels/dcasfhw-homewood-suites-springfield-va/",
		"hotelDescription": "Homewood Suites is a block off the main drag and perfect for anybody looking for a bit more quiet and seclusion. Free property wide wi-fi and a rooftop pool are key features to keep in mind.",
		"hotelNickname": "Best for Inner Peace & Quiet"
		},
		{
		"id": 8,
		"hotelName": "Wyndham Springfield City Centre",
		"hotelAddress": "700 E Adams St, Springfield, IL 62701",
		"hotelPriceRate": "99",
		"hotelRating": "***",
		"hotelAccessibilityRating": "*****",
		"hotelImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/22/c1/1b/19/exterior.jpg",
		"hotelUrl": "https://www.wyndhamhotels.com/wyndham/springfield-illinois/wyndham-springfield-city-centre/overview",
		"hotelDescription": "If distance is your concern the Wyndham in City Center is right across the street from the convention! Easy accessibility, but with the great location comes heavy foot traffic. This hotel is perfect for accessibility and mobility options, but fills up quick -- so book quickly if this fits your bill! ",
		"hotelNickname": "Right Across the Street"
		},
		{
		"id": 9,
		"hotelName": "La Quinta Inn & Suites by Wyndham",
		"hotelAddress": "100 Congress St, Springfield, MA 01104",
		"hotelPriceRate": "139",
		"hotelRating": "**",
		"hotelAccessibilityRating": "**",
		"hotelImgUrl": "https://www.wyndhamhotels.com/content/dam/property-images/en-us/lq/us/fl/orlando/53746/53746_exterior_view_4.jpg",
		"hotelUrl": "https://www.wyndhamhotels.com/laquinta/somerville-massachusetts/la-quinta-boston-somerville/overview",
		"hotelDescription": "If you're okay with a little bit more of a venture and perhaps the best features to value ratio, La Quinta should be your top contender ikn Springfield. Great price, scenic walk, and lots of off-the-beaten-path shops nearby.",
		"hotelNickname": "Ammenities to Value Ratio"
		},
		{
		"id": 10,
		"hotelName": "Country Inn & Suites by Radisson",
		"hotelAddress": "1751 W 1st St, Springfield, OH 45504",
		"hotelPriceRate": "107",
		"hotelRating": "*",
		"hotelAccessibilityRating": "*",
		"hotelImgUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/232821010.jpg?k=98a3d809b17cb64b8810363826677e6d164c06d53ade75ba9731cf6036fc67af&o=&hp=1",
		"hotelUrl": "https://www.choicehotels.com/ohio/dayton/country-inn-suites-hotels/oh233",
		"hotelDescription": "If you're on a budget the Country Inn is your best value in the market. If your primary focus is a bed to sleep in and a warm shower then this no frills location is just right to keep you fresh and engaged at the convention.",
		"hotelNickname": "Won't Break the Bank"
		},
		{
			"id": 11,
			"hotelName": "Holiday Inn Express & Suites Springfield-Medical District",
			"hotelAddress": "310 E Monastery St, Springfield, MO 65810",
			"hotelPriceRate": "153",
			"hotelRating": "*****",
			"hotelAccessibilityRating": "*****",
			"hotelImgUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_379,q_75,w_629/v1/crm/springfield/65759_664_b2dcd77b-5056-a348-3af884b890168113.jpg",
			"hotelUrl": "https://www.ihg.com/holidayinnexpress/hotels/us/en/springfield/sgfry/hoteldetail",
			"hotelDescription": "Located in the heart of Springfield, this Holiday Inn Express is within a few blocks from the steps of the convention and within walking distance of the critically acclaimed Krusty Burger.",
			"hotelNickname": "The Krusty Experience"
			},
			{
			"id": 12,
			"hotelName": "Homewood Suites by Hilton Springfield",
			"hotelAddress": "7010 Old Keene Mill Rd, Springfield, VA 22150",
			"hotelPriceRate": "160",
			"hotelRating": "****",
			"hotelAccessibilityRating": "****",
			"hotelImgUrl": "https://www.familyvacationcritic.com/wp-content/uploads/sites/19/2017/05/hotel-exterior-at-night-8-1280x640.jpg",
			"hotelUrl": "https://www.hilton.com/en/hotels/dcasfhw-homewood-suites-springfield-va/",
			"hotelDescription": "Homewood Suites is a block off the main drag and perfect for anybody looking for a bit more quiet and seclusion. Free property wide wi-fi and a rooftop pool are key features to keep in mind.",
			"hotelNickname": "Best for Inner Peace & Quiet"
			},
			{
			"id": 13,
			"hotelName": "Wyndham Springfield City Centre",
			"hotelAddress": "700 E Adams St, Springfield, IL 62701",
			"hotelPriceRate": "99",
			"hotelRating": "***",
			"hotelAccessibilityRating": "*****",
			"hotelImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/22/c1/1b/19/exterior.jpg",
			"hotelUrl": "https://www.wyndhamhotels.com/wyndham/springfield-illinois/wyndham-springfield-city-centre/overview",
			"hotelDescription": "If distance is your concern the Wyndham in City Center is right across the street from the convention! Easy accessibility, but with the great location comes heavy foot traffic. This hotel is perfect for accessibility and mobility options, but fills up quick -- so book quickly if this fits your bill! ",
			"hotelNickname": "Right Across the Street"
			},
			{
			"id": 14,
			"hotelName": "La Quinta Inn & Suites by Wyndham",
			"hotelAddress": "100 Congress St, Springfield, MA 01104",
			"hotelPriceRate": "139",
			"hotelRating": "**",
			"hotelAccessibilityRating": "**",
			"hotelImgUrl": "https://www.wyndhamhotels.com/content/dam/property-images/en-us/lq/us/fl/orlando/53746/53746_exterior_view_4.jpg",
			"hotelUrl": "https://www.wyndhamhotels.com/laquinta/somerville-massachusetts/la-quinta-boston-somerville/overview",
			"hotelDescription": "If you're okay with a little bit more of a venture and perhaps the best features to value ratio, La Quinta should be your top contender ikn Springfield. Great price, scenic walk, and lots of off-the-beaten-path shops nearby.",
			"hotelNickname": "Ammenities to Value Ratio"
			},
			{
			"id": 15,
			"hotelName": "Country Inn & Suites by Radisson",
			"hotelAddress": "1751 W 1st St, Springfield, OH 45504",
			"hotelPriceRate": "107",
			"hotelRating": "*",
			"hotelAccessibilityRating": "*",
			"hotelImgUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/232821010.jpg?k=98a3d809b17cb64b8810363826677e6d164c06d53ade75ba9731cf6036fc67af&o=&hp=1",
			"hotelUrl": "https://www.choicehotels.com/ohio/dayton/country-inn-suites-hotels/oh233",
			"hotelDescription": "If you're on a budget the Country Inn is your best value in the market. If your primary focus is a bed to sleep in and a warm shower then this no frills location is just right to keep you fresh and engaged at the convention.",
			"hotelNickname": "Won't Break the Bank"
			}
	
];

export const Hotels = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

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
					{hotelsArray.map((item,index) => 
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
										<a href="#" className="btn btn-primary mb-3">Book this for ${item.hotelPriceRate} per night!</a>
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







							{/* <img className="hotelIMG" src={item.hotelImgUrl} />
							<p>{item.id}</p>
							<p>{item.hotelName}</p>
							<p>{item.hotelAddress}</p>
							<p>{item.hotelPriceRate}</p>
							<p>{item.hotelRating}</p>
							<p>{item.hotelAccessibilityRating}</p> */}
						</div>
					)}
				</div>
			</div>
        </>
    );
};