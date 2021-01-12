import './App.css';
import Instrumento from './components/Instrumento';
import React from "react";
import boom from "./components/audio/boom.wav";
import clap from "./components/audio/clap.wav";
import hihat from "./components/audio/hihat.wav";
import kick from "./components/audio/kick.wav";
import openhat from "./components/audio/openhat.wav";
import ride from "./components/audio/ride.wav";
import snare from "./components/audio/snare.wav";
import tink from "./components/audio/tink.wav";
import tom from "./components/audio/tom.wav";



export class App extends React.Component {
  render() {
  return (
    <div id="drum-machine">
      <div id="display">
        <Instrumento codigo = "81" instrumento = "boom" letra = "Q" sonido = {boom} />
        <Instrumento codigo = "87" instrumento = "clap" letra = "W" sonido = {clap} />
        <Instrumento codigo = "69" instrumento = "hihat" letra = "E" sonido = {hihat} />
        <Instrumento codigo = "65" instrumento = "kick" letra = "A" sonido = {kick} />
        <Instrumento codigo = "83" instrumento = "openhat" letra = "S" sonido = {openhat} />
        <Instrumento codigo = "68" instrumento = "ride" letra = "D" sonido = {ride} />
        <Instrumento codigo = "90" instrumento = "snare" letra = "Z" sonido = {snare} />
        <Instrumento codigo = "88" instrumento = "tink" letra = "X" sonido = {tink} />
        <Instrumento codigo = "67" instrumento = "tom" letra = "C" sonido = {tom} />



    </div>
      </div>
  );
}
}

export default App;
