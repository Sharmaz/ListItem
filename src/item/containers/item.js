// Dependencias
import React, { Component } from 'react';
import Item from '../components/item';

class ItemContainer extends Component {
  // Con itemOptions se mostrará o no los botones para editar o eliminar un item
  state = {
    itemOptions: false,
    showEditItem: false
  }

  showHideItemOptions = (event) => {
    // Al click, cambiaremos el estado de itemOptions de falso a verdadero y viceversa
    this.setState({
      itemOptions: !this.state.itemOptions
    });
  }

  editItem = (event) => {
    // Cuando ocurra el evento vamos a mostrar el formulario para editar un item
    this.setState({
      showEditItem: true,
      itemOptions: false,
    });
  }

  editItemRemove = (event) => {
    // Vamos a remover el formulario cuando hagamos submit
    this.setState({
      showEditItem: false
    })
  }

  editItemOnKeyHandler = (event) => {
    // Al evento onKeyUp despues de presionar la tecla ESC vamos a salir del formulario
    if (event.keyCode === 27) {
      this.setState({
        showEditItem: !this.state.showEditItem,
      })
    }
  }

  deleteItem = (event) => {
    // Cuando se de click en el botón de eliminar mandamos un mensaje por consola
    console.log('Item Deleted!!')
  }

  render() {
    return (
      <div>
        <Item
          name={this.props.name}
          itemOptions={this.state.itemOptions}
          showHideItemOptions={this.showHideItemOptions}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          showEditItem={this.state.showEditItem}
          editItemOnKeyHandler={this.editItemOnKeyHandler}
        />
      </div>
    );
  }
}

export default ItemContainer;
