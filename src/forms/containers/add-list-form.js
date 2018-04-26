// Dependencias
import React, { Component } from 'react';
import AddListForm from '../components/add-list-form';

import api from '../../api';

class AddListFormContainer extends Component {

  // Manejamos el submit del formulario
  handleSubmit = async (event) => {
    event.preventDefault();

    // Creamos la lista con el valor del input como nombre
    await api.lists.createList(this.input.value);

    // Actualizamos la data
    await this.props.updateData();

    // Removemos el formulario
    this.props.addListRemove();
  }

  // Hacemos referencia al elemento input text para obtener su valor
  AddListRef = (element) => {
    this.input = element;
  }

  render() {
    return (
      <div>
        <AddListForm
          handleSubmit={this.handleSubmit}
          setRef={this.AddListRef}
          addListOnKeyHandler={this.props.addListOnKeyHandler}
        />
      </div>
    )
  }
}

export default AddListFormContainer;
