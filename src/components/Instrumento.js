
import React, { Component } from "react";

export default class Instrumento extends Component {

  constructor(props) {
    super(props);
    this.state = { letra: props.letra,
    mostrar: false,
    instrumento: props.instrumento,
    codigo: +props.codigo };
    this.reproducirSonido = this.reproducirSonido.bind(this);

}




  reproducirSonido(j) {
    console.log(j.type)
    const show = this.state.mostrar;
    const letra = this.state.letra;
    const instrumentoASonar = document.getElementById(`${letra}`);
    instrumentoASonar.play()
    this.setState({mostrar: !show })
  }

  



  render() {
    return (
      // onKeyDown={(e) => this.reproducirSonidoLetra(e)
      <div onClick={(j) => this.reproducirSonido(j)}  id={this.props.instrumento} className="instrumento" tabIndex={0} >
        <p className="letraInstrumento">{this.props.letra}</p>
        {this.state.mostrar && <p>{this.props.instrumento}</p>}
        <audio id={this.props.letra} className="clip" src={this.props.sonido}>
        </audio>
      </div>
    );
  }
    
}