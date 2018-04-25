// Dependencias
import React, { Component } from 'react';
import EditItemForm from '../components/edit-item-form';
import Item from '../../item/containers/item';

class EditItemFormContainer extends Component {
  state = {
    inputSubmit: false,
  }

  // Manejamos el evento submit del formulario
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.input.value);
    this.setState({
      inputSubmit: true,
    })
  }
  // Hacemos referencia al elemento input
  EditItemRef = (element) => {
    this.input = element;
  }
  render() {
    return (
      <div>
        {
          // Mostramos/Ocultamos el formulario si inputSubmit es true o false
          !this.state.inputSubmit &&
          <EditItemForm
            handleSubmit={this.handleSubmit}
            setRef={this.EditItemRef}
            itemValue={this.props.itemValue}
            editItemOnKeyHandler={this.props.editItemOnKeyHandler}
          />
        }
      </div>
    )
  }
}

export default EditItemFormContainer;
