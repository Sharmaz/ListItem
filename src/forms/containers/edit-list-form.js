// Dependencias
import React, { Component } from 'react';
import EditListForm from '../components/edit-list-form';

class EditListFormContainer extends Component {
  state = {
    inputSubmit: false,
  }

  // Manejamos el submit del formulario, imprimimos el valor del input en consola
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      inputSubmit: true,
    });
    console.log(this.input.value);
  }

  // Hacemos referencia al elemento input text para obtener su valor
  editListRef = (element) => {
    this.input = element;
  }

  render() {
    return (
      <div>
        {
          // Se muestra o no el formulario si inputSubmit es true o false
          !this.state.inputSubmit &&
          <EditListForm
            handleSubmit={this.handleSubmit}
            setRef={this.editListRef}
            listValue={this.props.name}
            editListOnKeyHandler={this.props.editListOnKeyHandler}
          />
        }
      </div>
    );
  }
}

export default EditListFormContainer;
