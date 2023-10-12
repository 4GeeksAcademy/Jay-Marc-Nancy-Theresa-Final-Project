import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_okvibjm', 'contact_form', form.current, 'UfJOkgaaOPu1K3y_Q')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      }, form.current.reset()
      );

  };

  return (
    <>
{/* start nancy's original form */}

      {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form> */}

{/* end nancy's original form */}

      <form form ref={form} onSubmit={sendEmail}>
        <div className="container-fluid p-4">
          <div className="row">
            <div className="col-12">
              <font className="badaboom fs3p5 font-white textBorderDarkBlue">Contact Us through this Email Form!</font>
            </div>
            <div className="col-12 mt-3">
              <label for="exampleFormControlInput1" className="form-label">
                <font className="fs1p25 font-spidey-lightBlue textBorderWhite">
                  <b>
                    Enter Your Name:
                  </b>
                </font>
              </label>
              <input type="text" name="user_name" aria-label="First name" className="form-control borderLightBlue" placeholder="First and Last Name" />
            </div>
            <div className="col-12 mt-3">
              <label for="exampleFormControlInput1" className="form-label">
                <font className="fs1p25 font-spidey-lightBlue textBorderWhite">
                  <b>
                    Enter Your Email address:
                  </b>
                </font>              
              </label>
              <input type="email" name="user_email" className="form-control borderLightBlue" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="col-12 mt-3">              
              <label for="exampleFormControlTextarea1" className="form-label">
                <font className="fs1p25 font-spidey-lightBlue textBorderWhite">
                  <b>
                    Enter your message below:
                  </b>
                </font> 
              </label>
              <textarea type="text" name="message" className="form-control borderLightBlue" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your email message here!"></textarea>
            </div>
            <div className="col-12 text-end mt-3">
              <button type="submit" className="button-55 bgLightRed font-white textBorderBlack" value="Send Email"><font className="badaboom fs1p5">Click to Send Email!</font></button>
            </div>                        
          </div>
        </div>
      </form>
    </>
  );
};


