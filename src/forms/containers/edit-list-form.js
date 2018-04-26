// Dependencias
import React, { Component } from 'react';
import EditListForm from '../components/edit-list-form';

import api from '../../api';

class EditListFormContainer extends Component {

  // Manejamos el submit del formulario, imprimimos el valor del input en consola
  handleSubmit = async (event) => {
    event.preventDefault();

    // Almacenamos en constantes el valor del input y el id de la lista
    const listId = this.props.id;
    const nameList = this.input.value;

    // Para actualizar le pasamos los parametros requeidos (id y valor del input)
    await api.lists.updateList(listId, nameList);

    // Actualizamos la data
    await this.props.updateData();

    // Removemos el formulario
    await this.props.editListRemove();
  }

  // Hacemos referencia al elemento input text para obtener su valor
  editListRef = (element) => {
    this.input = element;
  }

  render() {
    return (
      <EditListForm
        handleSubmit={this.handleSubmit}
        setRef={this.editListRef}
        listValue={this.props.name}
        editListOnKeyHandler={this.props.editListOnKeyHandler}
      />
    );
  }
}

export default EditListFormContainer;
