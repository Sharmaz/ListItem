// Dependencias
import React from 'react';

// Creamos el componente funcional Item en un arrow function rendereando las props
const Item = (props) => (
  <div className="item">
    <span>{props.name}</span>
  </div>
);

export default Item;
