// Dependencias
import React from 'react';
import './list-form.css'

/**
 * Rendereamos un formulario con un input text
 * le pasamos como props la función que va manejar el submit
 * hacemos una referencia para obtener el valor del input
 * al evento onKeyUp le pasamos por props la función addListOnkeyHandler
 */
const AddListForm = (props) => (
  <form 
    className="add-list-form"
    onSubmit={props.handleSubmit}
  >
    <input
      className="add-list"
      name="addList"
      placeholder="Nueva Lista"
      ref={props.setRef}
      type="text"
      onKeyUp={props.addListOnKeyHandler}
    />
  </form>
);

export default AddListForm;
