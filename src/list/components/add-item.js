// Dependencias
import React from 'react';
import Add from '../../icons/components/add';

/**
 * Componente funcional que contiene un botón con el icono de agregar
 * le pasamos como props la función para mostrar el formulario
 */
const AddItem = (props) => (
  <div className="List-action">
    <button onClick={props.addItem}>
      <Add size={25} color="black" />
  </button>
  </div>
);

export default AddItem;
