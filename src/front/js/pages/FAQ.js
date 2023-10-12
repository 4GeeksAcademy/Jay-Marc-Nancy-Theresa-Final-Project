import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import data from "../../../../data.json";
import "../../styles/FAQ.css";

export const FAQ = () => {
	const { store, actions } = useContext(Context);
    
    useEffect(() => {
        actions.getFAQData();   
    })

	return (
        <div className="container">
            {/* make jumbotron a component for this file, schedule, and vendors */}
            <div className="FAQJumbotron bg-light p-5 rounded-lg m-3">
                <img src="https://images.unsplash.com/photo-1562613528-4d0856802a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"></img>
                <div className="jumbotronContent">
                    <h1 className="display-4" id="FAQJumbotronTitle">FAQ</h1>
                    <p className="lead">Have Questions? We Have Answers!</p>
                    <hr className="my-4"></hr>
                    <p>Got questions about the Worst Con EverCon? We do too. You're in the right place. We've gathered all the information you need to make your experience smooth, enjoyable, and filled with epic moments. If you can't find what you're looking for here, feel free to reach out to our support team. Your adventure begins here!</p>
                </div>
            </div>
            <div className="accordion-wrapper">
                {data.faq_data.map((faq_data, index) => 
                    <div className="row accordion-event" key={index}>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id={faq_data.id}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={String('#collapsebox' + faq_data.id)} aria-expanded="false" aria-controls={faq_data.id}>
                                    {faq_data.question}
                                </button>
                                </h2>
                                <div id={String('collapsebox' + faq_data.id)} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="full-accordion">
                                            {faq_data.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}       
