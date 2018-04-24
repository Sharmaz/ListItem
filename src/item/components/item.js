// Dependencias
import React from 'react';
import './item.css';

// Creamos el componente funcional Item en un arrow function rendereando las props
const Item = (props) => (
  <div className="List-item">
    <h3>{props.name}</h3>
  </div>
);

export default Item;
