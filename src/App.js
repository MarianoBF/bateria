import './App.css';
import Instrumento from './components/Instrumento';
import React from "react";
import boom from "./assets/boom.wav";
import clap from "./assets/clap.wav";
import hihat from "./assets/hihat.wav";
import kick from "./assets/kick.wav";
import openhat from "./assets/openhat.wav";
import ride from "./assets/ride.wav";
import snare from "./assets/snare.wav";
import tink from "./assets/tink.wav";
import tom from "./assets/tom.wav";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrar: "",
      cancion: "",
      separacion: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.playSong = this.playSong.bind(this);
  }

  handleChange(event) {
    console.log(event)
    this.setState({cancion: event.target.value});
  }

  async playSong(event) {
    event.preventDefault();

    const timer = ms => new Promise(res => setTimeout(res, ms))
    for (let letra of this.state.cancion) {
      this.reproducirSonidoLetra({key: letra})
      await timer(1000)
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

      <div className='songContainer'>
        <h3 className="playerNotice">En este campo podés escribir una combinación de sonidos (poniendo la letra del recuadro)
        y elegir el tiempo que debe separar los sonidos. Luego presioná "tocar" para que se reproduzca.</h3>
        <form onSubmit={this.playSong}>
          <label>Instrumentos
            <input type="text" value={this.state.cancion} onChange={this.handleChange} maxLength={100}/>
          </label>
          <label>Separación
            <input className="separation" type="number" value={this.state.separacion} maxLength={2}/>
          </label>
          <button type="submit">Tocar</button>
        </form>
      </div>
      <p className="creditos">Fondo: <span>Photo by <a href="https://unsplash.com/@freestocks?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">freestocks</a> on <a href="https://unsplash.com/s/photos/drum?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></p>
    </div>
  );
}
}

export default App;
