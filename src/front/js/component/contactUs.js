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
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};