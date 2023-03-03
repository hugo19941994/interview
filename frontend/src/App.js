import RightPanel from "./Exercise";
import logo from './tech-logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="header-text">
            <p>SmartSteps</p>
          </div>
        </div>
      </header>
    <MainPanel/>
    </div>
  );
}

function MainPanel() {
  return (
    <div className="MainPanel">
      <LeftPanel/>
      <RightPanel/>
    </div>
  )
}

function LeftPanel() {
  return (
    <div id="LeftPanel" className="SubPanel">
      <h3>The following Restaurants have been detected in a 2 km radius from the specified location</h3>
    </div>
  )
}


export default App;
