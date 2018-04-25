// Dependencias
import React from 'react';
import Edit from '../../icons/components/edit';
import Delete from '../../icons/components/delete';
import Add from '../../icons/components/add';

import './list-options.css'

/**
 * Este componente va a mostar los botones para eliminar/editar lista
 * Tambien el botón de agregar un item a la lista
 */
const ListOptions = (props) => (
  <div className="List-options">
    <button className="editList-button" onClick={props.editList}>
      <Edit size={25} color="black"/>
    </button>
    <button className="addItem-button" onClick={props.addItem}>
        <Add size={25} color="black"/>
      </button>
    <button className="deleteList-button" onClick={props.deleteList}>
      <Delete size={25} color="black"/>
    </button>
  </div>
);

export default ListOptions;
