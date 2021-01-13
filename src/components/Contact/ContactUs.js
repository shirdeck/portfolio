import React from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p6pu04s",
        "template_bjpmrmh",
        e.target,
        "user_x4R5WsosTxiWIwL0dKNEd"
      )
      .then(
        (result) => {
          alert("Your mail has been sent successfuly! I'll get back to you shortly...")
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <p>!let's talk!</p>
      <div className="grid">
        <div className="head">
        <input type="text" name="user_name" placeholder="NAME" />
            <input type="email" name="user_email" placeholder="EMAIL" />
        </div>
        <div className="body">
        <textarea placeholder="HEY SHIR..." name="message" />
          <input type="submit" value="SEND" />
        </div>
      </div>
    </form>
  );
}
