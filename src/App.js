import React from "react";
import { useMediaQuery } from "react-responsive";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import SnakeGame from "./components/SnakeGame/SnakeGame";
import Ticker from "./components/Ticker/Ticker";
import JFF from "./components/JFF/JFF";
import ContactUs from "./components/Contact/ContactUs";
import Links from "./components/Links/Links";
import WebIcon from "./images/web-icon.png";
import Memoji from "./images/memoji.png";
import Modal from "./components/Modal/Modal";
import CV from "./components/CV/CV";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutMeModal from "./components/AboutModal/AboutMeModal";
import CVFile from "../src/CV-ShirDecker.pdf";

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1261px)",
  });
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1260px)",
  });

  const [emailSent, setEmailSent] = React.useState(false);

  return (
    <div className="grid-container">
      {isDesktopOrLaptop && (
        <>
          {/* Components for desktop or laptop */}
          <div className="logo">
            <img src={WebIcon} alt="web-icon" />
          </div>
          <div className="title">
            <span>Hi, I'm Shir Decker...</span>
          </div>
          <Modal />
          <CV />
          <Router>
            <Link to="/jff" className="jff-title">
              just for fun
            </Link>
            <Switch>
              <Route path="/jff">
                <JFF />
              </Route>
            </Switch>
          </Router>
          <div className="ticker">
            <Ticker />
          </div>
          <div className="snake">
            <SnakeGame />
          </div>
          <div className="memoji">
            <img src={Memoji} alt="memoji" />
          </div>
          <div className="projects">SOON</div>
          <div className="jff">SOON</div>
          <div className="contact">
            <ContactUs setEmailSent={setEmailSent} emailSent={emailSent} />
          </div>
          <div className="links">
            <Links />
          </div>
        </>
      )}
      {isTabletOrMobile && (
        <ChakraProvider>
          <div class="mobile">
            <div className="title-container">
              <div className="logo">
                <img src={WebIcon} alt="web-icon" />
              </div>
              <div className="title">
                <span>Shir Decker</span>
              </div>
            </div>
            <div class="about">
              <div className="column">
                <AboutMeModal />
                <a
                  href={CVFile}
                  download="CV-ShirDecker.pdf"
                  className="mobile-cv"
                >
                  <div>
my cv
                  </div>
                </a>
              </div>
              <div className="memoji">
                <img src={Memoji} alt="memoji" />
              </div>
            </div>
            <div className="contact">
              <ContactUs setEmailSent={setEmailSent} emailSent={emailSent} />
            </div>
            <div className="links">
              <Links />
            </div>
          </div>
        </ChakraProvider>
      )}
      {/* Components that are common to both views can be placed outside the conditional rendering */}
    </div>
  );
}

export default App;
