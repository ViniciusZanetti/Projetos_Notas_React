import React, { Component } from "react";
import ListaDeNotas from "./Componetes/ListaDeNotas";
import FormularioCadastro from "./Componetes/FormularioCadastro";

class App extends Component() {
  render(){
    return (
      <div>
        <FormularioCadastro />
        <ListaDeNotas />
      </div>
    );
  }
}

export default App;
