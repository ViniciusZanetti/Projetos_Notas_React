import React, { Component } from "react";
import ListaDeNotas from "./Componetes/ListaDeNotas/ListaDeNotas";
import FormularioCadastro from "./Componetes/FormularioCadastro/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";
import ListaDeCategorias from "./Componetes/ListaDeCategorias";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: ["Games", "Música"],
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo: titulo, texto: texto , categoria: categoria};
    const novoArrayDeNotas = [...this.state.notas, novaNota];
    const novoState = {
      notas: novoArrayDeNotas,
    };
    this.setState(novoState);
  }

  deletarNota(index) {
    let arrayDeNotas = this.state.notas;
    arrayDeNotas.splice(index, 1);
    this.setState({
      notas: arrayDeNotas,
    });
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayDeCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = { ...this.state, categorias: novoArrayDeCategorias };
    this.setState(novoEstado);
  }

  render() {
    console.log("render");
    return (

      <section className="conteudo">
        <FormularioCadastro
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}
        />
        <main>
          <ListaDeCategorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            className="conteudo-principal"
            categorias={this.state.categorias}
          />
          <ListaDeNotas
            notas={this.state.notas}
            apagarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
