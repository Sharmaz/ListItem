// Dependencias
import React from 'react';

// En este componente solo rendereamos el titulo de la lista
const ListHeader = (props) => (
  <h2 className="List-title">
    {props.name}
  </h2>
);

export default ListHeader;
