import './App.css';
import Instrumento from './components/Instrumento';
import React from "react";

export class App extends React.Component {
  render() {
  return (
    <div id="drum-machine">
      <div id="display">
        <Instrumento instrumento = "boom" letra = "Q" />
    </div>
      </div>
  );
}
}

export default App;
