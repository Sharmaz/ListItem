// Dependencias
import React from 'react';

/**
 * En este componente endereamos el titulo de la lista
 * En el h2 le pasamos por props la función hideShowListOptions para ejecutarla al click
 */
const ListHeader = (props) => (
  <h2 
    className="List-title"
    onClick={props.hideShowListOptions}
  >
    {props.name}
  </h2>
);

export default ListHeader;
