
import React, { Component } from "react";

export default class Instrumento extends Component {

  constructor(props) {
    super(props);
    this.state = { letra: props.letra,
    mostrar: false,
    instrumento: props.instrumento };

}


  render() {
    const srcaudio = this.props.instrumento
    console.log(srcaudio)
    return (
      <div onClick={this.reproducirSonido.bind(this)} onKeyDown={this.reproducirSonidoLetra.bind(this)} className="drum-pad" tabIndex={0} >
        <p>{this.props.letra}</p>
        {this.state.show && <p>{this.props.instrumento}</p>}
        <audio id={this.props.letra} className="clip">
          <source src={this.props.sonido} > 
          </source>
        </audio>
      </div>
    );
  }
    
  reproducirSonido() {
    const {show} = this.state;
    const letra = this.state.letra;
    const instrumentoASonar = document.getElementById(`${letra}`);
    instrumentoASonar.play()
    this.setState({show: !show })
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