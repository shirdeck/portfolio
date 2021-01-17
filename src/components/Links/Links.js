import React from "react";
import Linkedin from "../../images/linkedin.png";
import Github from "../../images/github.png";


const Links = () => {
  return (
    <>
    <a href="https://www.linkedin.com/in/shirdecker" target="_blank"><img src={Linkedin} alt=""/></a>
    <a href="https://github.com/shirdeck" target="_blank"><img src={Github} alt=""/></a>
  </>
  );
}

export default Links;
