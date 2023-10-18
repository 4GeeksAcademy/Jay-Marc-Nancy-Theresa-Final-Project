import React from "react";
import "../../styles/hotelCard.css";

export const HotelCard =(props) => {

    return (
        <>
            <div className="card hotelCard hotelCardBody m-3 p-0">
                <div>
                    <font className="font-spidey-yellow fs2p25 textBorderDarkBlue badaboom">{props.hotelNickname}</font>
                </div>
                <div className="m-0 py-0">
                    <a href={props.hotelUrl} target="_blank">
                        <img className="hotelIMG" src={props.hotelImgUrl} />
                    </a>
                </div>
                <div className="card-body font-spidey-darkBlue bgLightestYellow">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <strong className="fs1p25">
                                    {props.hotelName}
                                </strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col m-1">
                                <font className="fs1p0 font-spidey-darkRed">
                                    <strong>
                                        {props.hotelAddress}
                                    </strong>
                                </font>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col my-1">
                                <font className="fs1p0 fst-italic">
                                    {props.hotelDescription}
                                </font>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer pt-3">
                    <a href={props.hotelUrl} target="_blank" className="button-55 bgLightRed p-3 mb-3"><font className="font-black">Book now for ${props.hotelPriceRate} per night!</font></a>
                </div>
            </div>
        </>
    )
};