import React from "react";
import emailjs from "emailjs-com";
import useSound from 'use-sound';
import soundUrl from "../../oops.mp3";

export default function ContactUs() {

  // eslint-disable-next-line
  const [play, { stop }] = useSound(
    soundUrl,
    { volume: 0.5 }
  );

  // eslint-disable-next-line
  const [isHovering, setIsHovering] = React.useState(
    false
  );

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
      <div className="headline">
      <p>!let's talk!</p>
      </div>
      <div className="grid">
        <div className="head">
        <input type="text" name="user_name" placeholder="NAME" required />
            <input type="email" name="user_email" placeholder="EMAIL" required />
        </div>
        <div className="body">
        <textarea placeholder="HEY SHIR..." name="message" required />
          <input type="submit" value="SEND" onMouseDown={() => {
        setIsHovering(true);
        play();
      }}/>
        </div>
      </div>
    </form>
  );
}
