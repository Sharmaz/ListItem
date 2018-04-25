// Dependencias
import React from 'react';
import Edit from '../../icons/components/edit';
import Delete from '../../icons/components/delete';

import './item-options.css'

/**
 * Este componente va a mostar los botones para eliminar o editar un Item
 * Pasamos como props las funciones para eliminar o mostrar el formulario de editar Item
 */
const ItemOptions = (props) => (
  <div className="Item-options">
    <button onClick={props.editItem}><Edit size={16} color="black"/></button>
    <button onClick={props.deleteItem}><Delete size={16} color="black"/></button>
  </div>
);

export default ItemOptions;
