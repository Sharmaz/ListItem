// Dependencias
import React, { Component } from 'react';
import AddItemForm from '../components/add-item-form';

class AddItemFormContainer extends Component {
  // Manejamos el evento summit y dejamos un mensaje en consola
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.input.value);
    this.props.addItemRemove();
  }

  // Hacemos referencia al elemento input del formulario para obtener su valor
  AddItemRef = (element) => {
    this.input = element;
  }
  render() {
    return (
      <AddItemForm
        handleSubmit={this.handleSubmit}
        setRef={this.AddItemRef}
        addItemOnKeyHandler={this.props.addItemOnKeyHandler}
      />
    );
  }
}

export default AddItemFormContainer;
