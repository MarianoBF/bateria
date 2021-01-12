
import React, { Component } from "react";
import archivo from "./606-cymbal1.wav";

export default class Instrumento extends Component {

  constructor(props) {
    super(props);
    this.state = { letra: props.letra };
}


  render() {
    // ""../../public/audio/" 
    // let srcaudio = this.props.instrumento + ".wav"
 
    return (
      <div onClick={this.reproducirSonido.bind(this)} onKeyDown={this.reproducirSonidoLetra.bind(this)} className="drum-pad" tabIndex={0} >
        <p>{this.props.letra}</p>
        <p>{this.props.instrumento}</p>
        <audio id={this.props.letra} className="clip">
          <source src={archivo} > 
          </source>
        </audio>
      </div>
    );
  }
    
  reproducirSonido() {
    const letra = this.state.letra;
    const instrumentoASonar = document.getElementById(`${letra}`);
    instrumentoASonar.play()
  }

  reproducirSonidoLetra = (e) => {
    const letra = this.state.letra;
    e.persist()
    if (e.keyCode === 81) { //relativizar el keycode*******!!!
    const instrumentoASonar = document.getElementById(`${letra}`);
    instrumentoASonar.play()
    }
  }

}