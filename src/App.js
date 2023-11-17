import "./App.css";
import SnakeGame from "./components/SnakeGame/SnakeGame";
import Ticker from "./components/Ticker/Ticker";
import JFF from "./components/JFF/JFF";
import ContactUs from './components/Contact/ContactUs';
import Links from './components/Links/Links'
import WebIcon from "./images/web-icon.png";
import Memoji from "./images/memoji.png";
import Modal from "./components/Modal/Modal";
import CV from "./components/CV/CV";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="grid-container">
      <div className="logo">
        <img src={WebIcon} alt="web-icon" />
      </div>
      <div className="title">
        <span>Hi, i'm shir decker...</span>
      </div>
      <Modal/>
      <CV/>
      <Router>
      <Link to="/jff" className="jff-title">just for fun</Link>
      <Switch>
        <Route path="/jff">
          <JFF/>
        </Route>
      </Switch>
      </Router>
      <div className="ticker">
        <Ticker />
      </div>
      <div className="snake" id="class">
        <SnakeGame />
      </div>
      <div className="memoji">
        <img src={Memoji} alt="memoji" />
      </div>
      <div className="projects">SOON</div>
      <div className="jff">SOON</div>
      <div className="contact"><ContactUs/></div>
      <div className="links"><Links/></div>
    </div>
  );
}

export default App;
