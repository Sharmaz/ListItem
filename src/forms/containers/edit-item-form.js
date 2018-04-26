// Dependencias
import React, { Component } from 'react';
import EditItemForm from '../components/edit-item-form';
import Item from '../../item/containers/item';

import api from '../../api';

class EditItemFormContainer extends Component {
  // Manejamos el evento submit del formulario
  handleSubmit = async (event) => {
    event.preventDefault();

    // Almacenamos los valores en constantes que necesitamos para actualizar un item
    const itemId = this.props.id;
    const newNameItem = this.input.value;

    // Actualizamos el item pasandole el id y el nuevo nombre
    await api.items.updateItem(itemId, newNameItem);

    // Actualizamos la data en el estado
    await this.props.updateData();

    // Removemos el formulario
    this.props.editItemRemove();
  }

  // Hacemos referencia al elemento input
  EditItemRef = (element) => {
    this.input = element;
  }

  render() {
    return (
      <EditItemForm
        handleSubmit={this.handleSubmit}
        setRef={this.EditItemRef}
        itemValue={this.props.itemValue}
        editItemOnKeyHandler={this.props.editItemOnKeyHandler}
      />
    );
  }
}

export default EditItemFormContainer;
