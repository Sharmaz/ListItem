// Dependencias
import React, { Component } from 'react';
import AddItemForm from '../components/add-item-form';

import api from '../../api';

class AddItemFormContainer extends Component {
  // Manejamos el evento summit
  handleSubmit = async (event) => {
    event.preventDefault();

    // Almacenamos los valores en constantes que necesitamos para crear un item
    const listId = this.props.listId;
    const nameItem = this.input.value;

    // creamos el item pasandole como parametros el id y el valor del input
    await api.items.createItem(listId, nameItem);

    // Actualizamos la data
    await this.props.updateData();

    // Removemos el formulario
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
