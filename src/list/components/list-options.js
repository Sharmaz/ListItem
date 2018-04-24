// Dependencias
import React from 'react';
import Edit from '../../icons/components/edit';
import Delete from '../../icons/components/delete';

import './list-options.css'

// Este componente va a mostar los botones para eliminar o editar una lista
const ListOptions = (props) => (
  <div className="List-options">
    <button onClick={props.editList}>
      <Edit size={25} color="black"/>
    </button>
    <button onClick={props.deleteList}>
      <Delete size={25} color="black"/>
    </button>
  </div>
);

export default ListOptions;
