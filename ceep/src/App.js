import React, { Component } from "react";
import ListaDeNotas from "./Componetes/ListaDeNotas/ListaDeNotas";
import FormularioCadastro from "./Componetes/FormularioCadastro/FormularioCadastro";
import ListaDeCategorias from "./Componetes/ListaDeCategorias/ListadeCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";
class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
    
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias.categorias}
          criarNota={this.notas.criarNota}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota}
            notas={this.notas.notas}
          />
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;