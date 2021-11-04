import React, { Component } from 'react';
import "./style.css";
import deleteSVG from "../../assets/img/delete.svg";

export default class CardNotas extends Component{

    apagar(){
        const indice = this.props.indice;
        this.props.apagarNota(indice);
    }

    render(){
        return(
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <img src= {deleteSVG} alt="delete" onClick={this.apagar.bind(this)}/>
                </header>
                <p className="card-nota_texto">{this.props.texto}</p>
            </section>
        )
    }
}   