import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

let hotelsArray = [
	{
	"id": 1,
	"hotelName": "Holiday Inn Express & Suites Springfield-Medical District",
	"hotelAddress": "310 E Monastery St, Springfield, MO 65810",
	"hotelPriceRate": "$153 per night",
	"hotelRating": "*****",
	"hotelAccessibilityRating": "*****",
	"hotelImgUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_379,q_75,w_629/v1/crm/springfield/65759_664_b2dcd77b-5056-a348-3af884b890168113.jpg"
	},
	{
	"id": 2,
	"hotelName": "Homewood Suites by Hilton Springfield",
	"hotelAddress": "7010 Old Keene Mill Rd, Springfield, VA 22150",
	"hotelPriceRate": "$160 per night",
	"hotelRating": "****",
	"hotelAccessibilityRating": "****",
	"hotelImgUrl": "https://www.familyvacationcritic.com/wp-content/uploads/sites/19/2017/05/hotel-exterior-at-night-8-1280x640.jpg"
	},
	{
	"id": 3,
	"hotelName": "Wyndham Springfield City Centre",
	"hotelAddress": "700 E Adams St, Springfield, IL 62701",
	"hotelPriceRate": "$99 per night",
	"hotelRating": "***",
	"hotelAccessibilityRating": "***",
	"hotelImgUrl": "https://media-cdn.tripadvisor.com/media/photo-s/22/c1/1b/19/exterior.jpg"
	},
	{
	"id": 4,
	"hotelName": "La Quinta Inn & Suites by Wyndham",
	"hotelAddress": "100 Congress St, Springfield, MA 01104",
	"hotelPriceRate": "$139 per night",
	"hotelRating": "**",
	"hotelAccessibilityRating": "**",
	"hotelImgUrl": "https://www.wyndhamhotels.com/content/dam/property-images/en-us/lq/us/fl/orlando/53746/53746_exterior_view_4.jpg"
	},
	{
	"id": 5,
	"hotelName": "Country Inn & Suites by Radisson",
	"hotelAddress": "1751 W 1st St, Springfield, OH 45504",
	"hotelPriceRate": "$107 per night",
	"hotelRating": "*",
	"hotelAccessibilityRating": "*",
	"hotelImgUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/232821010.jpg?k=98a3d809b17cb64b8810363826677e6d164c06d53ade75ba9731cf6036fc67af&o=&hp=1"
	}
];


export const Hotels = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (
        <>
            Hello from Hotels!!
            <center>


            {hotelsArray.map((item,index) => 
                <div key={index}>
                    <img className="hotelIMG" src={item.hotelImgUrl} />
                    <p>{item.id}</p>
                    <p>{item.hotelName.id}</p>
                    <p>{item.hotelAddress}</p>
                    <p>{item.hotelPriceRate}</p>
                    <p>{item.hotelRating}</p>
                    <p>{item.hotelAccessibilityRating}</p>
                </div>
            )}


            </center>
        </>
    );
};


