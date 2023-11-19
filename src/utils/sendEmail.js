import emailjs from "emailjs-com";

export function sendEmail(e, setEmailSent) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4hjyq7y",
        "template_l3weiup",
        e.target,
        "Uc4bmlDbZsjcknx_Y"
      )
      .then(
        (result) => {
          alert("Your mail has been sent successfuly! I'll get back to you shortly...")
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }