// Dependencias
import React, { Component } from 'react';
import AddListForm from '../components/add-list-form';

class AddListFormContainer extends Component {
  state = {
    inputSubmit: false,
  }

  // Manejamos el submit del formulario
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.input.value);
    this.setState({
      inputSubmit: true,
    });
    this.props.addListRemove();
  }

  // Hacemos referencia al elemento input text para obtener su valor
  AddListRef = (element) => {
    this.input = element;
  }
  
  render() {
    return (
      <div>
        {
          // Rendereamos o no el formulario si inputSubmit es true o false
          !this.state.inputSubmit &&
          <AddListForm
            handleSubmit={this.handleSubmit}
            setRef={this.AddListRef}
            addListOnKeyHandler={this.props.addListOnKeyHandler}
          />
        }
      </div>
    )
  }
}

export default AddListFormContainer;
