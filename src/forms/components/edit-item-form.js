// Dependencias
import React from 'react';
import './item-form.css'

/**
 * Renderemos un formulario con un input text y le hacemos referencia
 * le pasamos como props la función que va manejar el submit
 */
const EditItemForm = (props) => (
  <form 
    className="edit-item-form"
    onSubmit={props.handleSubmit}
  >
    <input
      className="edit-item"
      name="editItem"
      placeholder={props.itemValue}
      ref={props.setRef}
      type="text"
      onKeyUp={props.editItemOnKeyHandler}
    />
  </form>
);

export default EditItemForm;
