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
  constructor(props) {
    super(props);
    this.state = {
      mostrar: "",
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.reproducirSonidoLetra, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.reproducirSonidoLetra, false);
  }

  reproducirSonidoLetra = (e) => {

    const INSTRUMENTOS = ["Q","W","E","A","S","D","Z","X","C" ]

    // const show = this.state.mostrar;
    const letra = e.key.toUpperCase();

    if (INSTRUMENTOS.includes(letra)) { 
    const instrumentoASonar = document.getElementById(`${letra}`);
    instrumentoASonar.play()
    this.setState({mostrar: letra })
    setTimeout(()=>this.setState({mostrar: ""}),300)
    }
  }

  render() {

  return (
    <div id="drum-machine">
      <h1>Batería: hacé clic o tocá la tecla para hacer sonar el instrumento</h1>

      <div className="displayBateria" id="display">
        <Instrumento codigo = "81" instrumento = "boom" letra = "Q" sonido = {boom} mostrar={this.state.mostrar} />
        <Instrumento codigo = "87" instrumento = "clap" letra = "W" sonido = {clap} mostrar={this.state.mostrar} />
        <Instrumento codigo = "69" instrumento = "hihat" letra = "E" sonido = {hihat} mostrar={this.state.mostrar} />
        <Instrumento codigo = "65" instrumento = "kick" letra = "A" sonido = {kick} mostrar={this.state.mostrar} />
        <Instrumento codigo = "83" instrumento = "openhat" letra = "S" sonido = {openhat} mostrar={this.state.mostrar} />
        <Instrumento codigo = "68" instrumento = "ride" letra = "D" sonido = {ride} mostrar={this.state.mostrar} />
        <Instrumento codigo = "90" instrumento = "snare" letra = "Z" sonido = {snare} mostrar={this.state.mostrar} />
        <Instrumento codigo = "88" instrumento = "tink" letra = "X" sonido = {tink} mostrar={this.state.mostrar} />
        <Instrumento codigo = "67" instrumento = "tom" letra = "C" sonido = {tom} mostrar={this.state.mostrar} />
      </div>
    </div>
  );
}
}

export default App;
