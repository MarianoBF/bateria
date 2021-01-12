
import React, { Component } from "react";

export default class Instrumento extends Component {

  constructor(props) {
    super(props);
    this.state = { letra: props.letra,
    mostrar: false,
    instrumento: props.instrumento,
    codigo: +props.codigo };

}


  render() {
    return (
      <div onClick={this.reproducirSonido.bind(this)} onKeyDown={this.reproducirSonidoLetra.bind(this)} id={this.props.instrumento} className="drum-pad" tabIndex={0} >
        <p>{this.props.letra}</p>
        {this.state.show && <p>{this.props.instrumento}</p>}
        <audio id={this.props.letra} className="clip" src={this.props.sonido}>
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
    const {show} = this.state;
    const letra = this.state.letra;
    if (e.keyCode === this.state.codigo) { 
    const instrumentoASonar = document.getElementById(`${letra}`);
    instrumentoASonar.play()
    this.setState({show: !show })

    }
  }

}