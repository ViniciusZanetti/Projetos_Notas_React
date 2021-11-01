import React, { Component } from "react";
import CardNotas from "./CardNotas";

export default class ListaDeNotas extends Component{
    render(){
        return(
            <ul>
                {console.log("Aqui é uma tag JS")}
                <li>
                    <div>Trabalho</div>
                    <CardNotas/>
                </li>
            </ul>
        )
    }
    
}

