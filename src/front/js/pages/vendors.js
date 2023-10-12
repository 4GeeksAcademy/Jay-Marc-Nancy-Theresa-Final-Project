import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/vendors.css";
// import { Vendor } from "../component/Vendor.js";
import data from "../../../../data.json";

export const Vendors = props => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getArtVendors();
        actions.getMerchVendors();
    })
    // const params = useParams();

    return (
        <div className="container">
            <div className="vendorJumbotron bg-light p-5 rounded-lg m-3">
                <img src="https://images.unsplash.com/photo-1600711847896-ea25db3164e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"></img>
                <div className="jumbotronContent">
                    <h1 className="display-4" id="vendorJumbotronTitle">Vendors</h1>
                    <p className="lead">Explore a Universe of Treasures</p>
                    <hr className="my-4"></hr>
                    <p>Welcome to the Vendor Hall of our Comic Book Convention! Prepare to embark on a thrilling journey through a galaxy of unique and captivating finds. Our carefully curated vendors offer a diverse array of treasures, from rare comic books and collectibles to one-of-a-kind art pieces and memorabilia.</p>
                </div>
            </div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item ">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button vendorAccordionButton collapsed fs2p0 badaboom font-spidey-yellow textBorderBlack align-self-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Comics
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body accordion-body-overflow">
                            <ul className="list-group">
                                {store.comicVendors.map((vendor, idx) =>
                                    <a key={idx} href={vendor.site_url} target="_blank">
                                        {vendor.name}
                                    </a>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button vendorAccordionButton collapsed fs2p0 badaboom font-spidey-yellow textBorderBlack align-self-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Art
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul className="list-group">
                                {data.art_vendors.map((artVendor, index) =>
                                    <a key={index}>
                                        {artVendor.vendor_name}
                                    </a>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button vendorAccordionButton collapsed fs2p0 badaboom font-spidey-yellow textBorderBlack align-self-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Merch
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul className="list-group">
                                {data.merch_vendors.map((merchVendor, index) =>
                                    <a key={index}>
                                        {merchVendor.vendor_name}
                                    </a>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// API to Use in Comic Vendors Accordion: https://comicvine.gamespot.com/api/documentation#toc-0-26



