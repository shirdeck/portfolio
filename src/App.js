import "./App.css";
import SnakeGame from "./components/SnakeGame/SnakeGame";
import Ticker from "./components/Ticker/Ticker";
import ContactUs from './components/Contact/ContactUs';
import WebIcon from "./web-icon.png";
import Memoji from "./memoji.png";


function App() {
  return (
    <div className="grid-container">
      <div className="logo">
        <img src={WebIcon} alt="web-icon" />
      </div>
      <div className="title">
        <span>shir decker : web developer</span>
      </div>
      <div className="about-title">About Me</div>
      <div className="projects-title">Projects</div>
      <div className="jff-title">Just For Fun</div>
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
      <div className="links">SOON</div>
    </div>
  );
}

export default App;
