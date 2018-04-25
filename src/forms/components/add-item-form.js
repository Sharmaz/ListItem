// Dependencias
import React from 'react';

import './item-form.css'

/**
 * En este componente renderemos un formulario con un input text
 * le pasamos como props la función que va manejar el submit
 * hacemos una referencia para obtener el valor del input
 */
const AddItemForm = (props) => (
  <form 
    className="add-item-form"
    onSubmit={props.handleSubmit}
  >
    <input
      className="add-item"
      name="addItem"
      placeholder="Nuevo Item"
      ref={props.setRef}
      type="text"
      onKeyUp={props.addItemOnKeyHandler}
    />
  </form>
);

export default AddItemForm;
