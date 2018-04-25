// Dependencias
import React from 'react';

import './list-form.css'

/**
 * En este componente renderemos un formulario con un input text
 * le pasamos como props la función que va manejar el submit
 * hacemos una referencia para obtener el valor del input
 * al evento onKeyUp le pasamos por props la función editListOnkeyHandler
 */
const EditListForm = (props) => (
  <form 
    className="edit-item-form"
    onSubmit={props.handleSubmit}
  >
    <input
      className="edit-list"
      name="editList"
      placeholder={props.listValue}
      ref={props.setRef}
      type="text"
      onKeyUp={props.editListOnKeyHandler}
    />
  </form>
);

export default EditListForm;
