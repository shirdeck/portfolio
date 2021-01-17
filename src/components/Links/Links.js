import React, { useState } from "react";
import Linkedin from "../../images/linkedin.png";
import LinkedinOrange from "../../images/linkedin-orange.png";
import Github from "../../images/github.png";
import GithubOrange from "../../images/github-orange.png";



const Links = () => {

  const [linkedInSrc, setLinkedInSrc] = useState(Linkedin)
  const [gitHubSrc, setGitHubSrc] = useState(Github)

  return (
    <>
    <a href="https://www.linkedin.com/in/shirdecker" target="_blank" rel="noreferrer"><img src={linkedInSrc} onMouseEnter={() => setLinkedInSrc(LinkedinOrange)} onMouseLeave={() => setLinkedInSrc(Linkedin)} alt=""/></a>
    <a href="https://github.com/shirdeck" target="_blank" rel="noreferrer"><img src={gitHubSrc} onMouseEnter={() => setGitHubSrc(GithubOrange)} onMouseLeave={() => setGitHubSrc(Github)} alt=""/></a>
  </>
  );
}

export default Links;


onmouseover="this.src='http://icons.iconarchive.com/icons/fasticon/angry-birds/128/red-bird-icon.png'"
onmouseout="this.src='http://icons.iconarchive.com/icons/fasticon/angry-birds/128/yellow-bird-icon.png'"