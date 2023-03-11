import RightPanel from "./Exercise";
import logo from './tech-logo.svg';
import './App.css';
import { useState } from "react";


function App() {

  const [filtro, setFiltro] = useState("Todos");

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
    <MainPanel filtro={filtro} setFiltro={setFiltro}/>
    </div>
  );
}

function MainPanel({filtro, setFiltro}) {
  return (
    <div className="MainPanel">
      <LeftPanel filtro={filtro} setFiltro={setFiltro}/>
      <RightPanel filtro={filtro}/>
    </div>
  )
}

function LeftPanel({filtro, setFiltro}) {

  return (
    <div id="LeftPanel" className="SubPanel">
      <h3>The following Restaurants have been detected in a 2 km radius from the specified location</h3>
      
      <div className="botones-filtro">
      <button className={filtro == 'Todos' ? "boton-filtro-activado" : "boton-filtro" } onClick={()=>{setFiltro("Todos")}}>Todos</button>
      <button className={filtro == 'Muy bueno' ? "boton-filtro-activado" : "boton-filtro" } onClick={()=>{setFiltro("Muy bueno")}}>Muy bueno</button>
      <button className={filtro == 'Excelente' ? "boton-filtro-activado" : "boton-filtro" } onClick={()=>{setFiltro("Excelente")}}>Excelente</button>
      </div>
    
    </div>
  )
}


export default App;
