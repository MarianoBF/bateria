import React, { Component } from "react";

export default class Instrumento extends Component {

  constructor(props) {
    super(props);
    this.state = { letra: props.letra,
      mostrar: "",
      instrumento: props.instrumento,
      codigo: +props.codigo };
    this.reproducirSonido = this.reproducirSonido.bind(this);
  }

  reproducirSonido(j) {
    const letra = this.state.letra;
    const instrumentoASonar = document.getElementById(`${letra}`);
    instrumentoASonar.play()
    this.setState({mostrar: letra })
    setTimeout(()=>this.setState({mostrar: ""}),300)
  }

  render() {
    return (
      <div onClick={(j) => this.reproducirSonido(j)}  id={this.props.instrumento} className={(this.props.mostrar === this.props.letra || this.state.mostrar === this.props.letra) ? "instrumentoDestacado" : "instrumento"} tabIndex={0} >
        <p className="letraInstrumento">{this.props.letra}</p>
        <p>{this.props.instrumento}</p>
        
        <audio id={this.props.letra} className="clip" src={this.props.sonido}>
        </audio>
      </div>
    );
  }   
}