import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const AboutContact = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="colun-12 text-start">
                        <h1>ABOUT PAGE TITLE & BANNER</h1>
                        <h2>Small Sub-text lead in for next paragraph</h2>
                        <p>Description of what you will find on this page.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2 border border-danger">
                        Column Left
                    </div>
                    <div className="col-8 border border-danger text-start"> 




    {/* div link header to open/close collapsable content */}
                        <a type="button" className="container btn btn-warning mt-3" data-bs-toggle="collapse" href="#how-we-got-started-collapse-component" role="button" aria-expanded="false" aria-controls="how-we-got-started-collapse-component">
                            <div className="container text-start">
                                <div className="row">
                                    <div className="col text-start">
                                        How We Got Started
                                    </div>
                                    <div className="col text-end">
                                        expand logo
                                    </div>
                                </div>                                
                            </div>
                        </a>
    {/* collapsable content */}
                        <div className="collapse mb-3" id="how-we-got-started-collapse-component">
                            <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>

    {/* div link header to open/close collapsable content */}
                        <a type="button" className="container btn btn-success mt-3" data-bs-toggle="collapse" href="#who-we-are-collapse-component" role="button" aria-expanded="false" aria-controls="who-we-are-collapse-component">
                            <div className="container text-start">
                                <div className="row">
                                    <div className="col text-start">
                                        Who We Are
                                    </div>
                                    <div className="col text-end">
                                        expand logo
                                    </div>
                                </div>                                
                            </div>
                        </a>
    {/* collapsable content */}
                        <div className="collapse mb-3" id="who-we-are-collapse-component">
                            <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>

    {/* div link header to open/close collapsable content */}
                        <a type="button" className="container btn btn-primary mt-3" data-bs-toggle="collapse" href="#mission-statement-collapse-component" role="button" aria-expanded="false" aria-controls="mission-statement-collapse-component">
                            <div className="container text-start">
                                <div className="row">
                                    <div className="col text-start">
                                        Worst Convention EverCon Mission Statement
                                    </div>
                                    <div className="col text-end">
                                        expand logo
                                    </div>
                                </div>                                
                            </div>
                        </a>
    {/* collapsable content */}
                        <div className="collapse mb-3" id="mission-statement-collapse-component">
                            <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>

    {/* div link header to open/close collapsable content */}
                        <a type="button" className="container btn btn-danger mt-3" data-bs-toggle="collapse" href="#whats-next-collapse-component" role="button" aria-expanded="false" aria-controls="whats-next-collapse-component">
                            <div className="container text-start">
                                <div className="row">
                                    <div className="col text-start">
                                        What's Next for the Con?
                                    </div>
                                    <div className="col text-end">
                                        expand logo
                                    </div>
                                </div>                                
                            </div>
                        </a>
    {/* collapsable content */}
                        <div className="collapse mb-3" id="whats-next-collapse-component">
                            <div className="card card-body">
                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div> 





                    </div>
                    <div className="col-2 border border-danger">
                        Column Right
                    </div>
                </div>
            </div>

            <div className="container border border-danger">
                <form action="#" method="get" enctype="text/plain">

                    <label for="exampleFormControlInput1" class="form-label">Name:</label>

                        <div className="row">
                            <div className="col text-start">
                                <input type="text" aria-label="First name" class="form-control" placeholder="First Name" />
                            </div>
                            <div className="col text-end">
                                <input type="text" aria-label="Last name" class="form-control" placeholder="Last Name" />
                            </div>
                        </div>


                    <label for="exampleFormControlInput1" class="form-label">Enter Your Email address:</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                    <label for="exampleFormControlInput1" class="form-label">Email Subject:</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Hello Fellow Nerds.." />

                    <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your email message here!"></textarea>

                    <input type="submit" value="Send" />
                </form>
            </div>  




            <div className="container text-center">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="mtgcard">
                <img className="mtglogo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdesignlooter.com%2Fimages%2Fmagic-the-gathering-svg-1.png&f=1&nofb=1&ipt=ca09e3b8959128f35f34882de27562c59f0604c28aeeee6efc6d39c2a72183ff&ipo=images" />
            </div> */}


        </>
    );
};