import React, { Component } from "react";
import CardNota from "./CardNotas";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map(categorias => {
            return (
            <li>

                <CardNota />
            </li>
            );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
