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
            {/* accordion for faq */}
            <div className="col-12 text-start mt-3">
            {/* div link header to open/close collapsable content */}                
            {data.faq_data.map((faq_data, index) => 
                <a type="button" className="container button-55 bgLightBlue borderYellow mt-3" data-bs-toggle="collapse" href="#how-we-got-started-collapse-component" role="button" aria-expanded="false" aria-controls="how-we-got-started-collapse-component">
                <div className="container text-start">
                    <div className="row">
                        <div className="col-9 text-start text-uppercase fs2p0 badaboom font-spidey-yellow textBorderBlack align-self-center">
                            {faq_data.question}
                        </div>
                        {/* <div className="col-3 text-end font-spidey-yellow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z" />
                            </svg>
                        </div> */}
                    </div>
                </div>
            </a>
                )}
             {/* collapsable content */}
             <div className="container-fluid">
             {data.faq_data.map((faq_data, index) => 
             <div className="row">
                 <div className="col aboutDropdownSpacer">                                    
                 </div>
                 <div className="m-0 p-0">
                     <div className="collapse mb-3" id="how-we-got-started-collapse-component">
                         <div className="card card-body bgLightestYellow mt-2 font-spidey-darkBlue">
                             {faq_data.answer}
                         </div>
                     </div>
                 </div>
                 <div className="col aboutDropdownSpacer">                                                                  
                 </div>
             </div>
             )}
         </div>






                    {/* // <div className="row accordion-event" key={index}>
                    //     <div className="accordion" id="accordionExample">
                    //         <div className="accordion-item">
                    //             <h2 className="accordion-header" id={faq_data.id}>
                    //             <button className="accordion-button FAQAccordionButton collapsed" type="button" data-bs-toggle="collapse" data-bs-target={String('#collapsebox' + faq_data.id)} aria-expanded="false" aria-controls={faq_data.id}>
                    //                 {faq_data.question}
                    //             </button>
                    //             </h2>
                    //             <div id={String('collapsebox' + faq_data.id)} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    //                 <div className="accordion-body">
                    //                     <div className="full-accordion">
                    //                         {faq_data.answer}
                    //                     </div>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div> */}
        </div>
    </div>
    )
}       
