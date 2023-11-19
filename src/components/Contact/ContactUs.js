import React from "react";
import { useMediaQuery } from "react-responsive";
import { sendEmail } from "../../utils/sendEmail";
import useSound from "use-sound";
import soundUrl from "../../oops.mp3";

export default function ContactUs({setEmailSent, emailSent}) {
  const [play, { stop }] = useSound(soundUrl, { volume: 0.5 });
  const [isHovering, setIsHovering] = React.useState(false);

  // Define the media query
  const isMobile = useMediaQuery({ maxWidth: 1260 });

  const handleSubmit = (e) => {
    if (!emailSent) {
      sendEmail(e, setEmailSent);
    }
  };

  return isMobile ? (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="headline">
        <p>!let's talk!</p>
      </div>
      <div className="grid">
        <div className="head">
          <input type="text" name="user_name" placeholder="NAME" required />
          <input type="email" name="user_email" placeholder="EMAIL" required />
        </div>
        <div className="body">
          <textarea
            placeholder={isMobile ? "Type your message..." : "HEY SHIR..."}
            name="message"
            required
          />
          <input
            type="submit"
            value="SEND"
            className={`submit ${emailSent ? "email-sent" : ""}`}
            onMouseDown={() => {
              setIsHovering(true);
              play();
            }}
          />
        </div>
      </div>
    </form>
  ) : (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="headline">
        <p>!let's talk!</p>
      </div>
      <div className="head">
        <input
          className="name"
          type="text"
          name="user_name"
          placeholder="NAME"
          required
        />
        <input type="email" name="user_email" placeholder="EMAIL" required />
      </div>
      <div className="body">
        <textarea placeholder="HEY SHIR..." name="message" required />
        <input
          type="submit"
          value={emailSent ? "SENT" : "SEND"}
          className={`submit ${emailSent ? "email-sent" : ""}`}
          onMouseDown={() => {
            setIsHovering(true);
            play();
          }}
        />
      </div>
    </form>
  );
}
