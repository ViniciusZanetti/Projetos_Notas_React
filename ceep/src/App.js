import React, { Component } from "react";
import ListaDeNotas from "./Componetes/ListaDeNotas/ListaDeNotas";
import FormularioCadastro from "./Componetes/FormularioCadastro/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo: titulo, texto: texto}
    const novoArrayDeNotas = [...this.state.notas, novaNota]
    const novoState = {
      notas: novoArrayDeNotas
    }
    this.setState(novoState)
  }

  deletarNota(index){
    let arrayDeNotas = this.state.notas
    arrayDeNotas.splice(index, 1)
    this.setState({
      notas: arrayDeNotas
    })
  }


  render() {
    console.log("render")
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} apagarNota={this.deletarNota.bind(this)}/>
      </section>
    );
  }
}

export default App;