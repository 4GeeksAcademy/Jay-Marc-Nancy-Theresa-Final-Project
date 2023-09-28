import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/vendors.css"; 


export const Vendors = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (
        <div className="container">
            <div className="vendorJumbotron bg-light p-5 rounded-lg m-3">
                <img src="https://images.unsplash.com/photo-1496494218905-aa0568688625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"></img>
                <div className="jumbotronContent">
                    <h1 className="display-4">Vendors</h1>
                    <p className="lead">Explore a Universe of Treasures</p>
                    <hr className="my-4"></hr>
                    <p>Welcome to the Vendor Hall of our Comic Book Convention! Prepare to embark on a thrilling journey through a galaxy of unique and captivating finds. Our carefully curated vendors offer a diverse array of treasures, from rare comic books and collectibles to one-of-a-kind art pieces and memorabilia.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>
            </div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Comics
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {/* map vendors of the comicVendor type with the Vendor.js component*/}
                            {/* {store.publishers.map((publisher, index) => <Vendor key={index} index={index} name={name} site_detail_url={site_detail_url} type="comicVendor"/>)} */}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Art 
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Merch
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// API to Use in Comic Vendors Accordion: https://comicvine.gamespot.com/api/documentation#toc-0-26