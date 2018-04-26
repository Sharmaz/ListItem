// Dependencias
import React, { Component } from 'react';
import Item from '../components/item';

import api from '../../api';

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
    });
  }

  editItemOnKeyHandler = (event) => {
    // Al evento onKeyUp despues de presionar la tecla ESC vamos a salir del formulario
    if (event.keyCode === 27) {
      this.setState({
        showEditItem: !this.state.showEditItem,
      });
    }
  }

  deleteItem = async (event) => {
    // Eliminamos el item por medio del API
    await api.items.deleteItem(this.props.id);

    // Actualizamos la data en el estado
    this.props.updateData();
  }

  render() {
    return (
      <Item
        name={this.props.name}
        itemOptions={this.state.itemOptions}
        showHideItemOptions={this.showHideItemOptions}
        deleteItem={this.deleteItem}
        editItem={this.editItem}
        editItemRemove={this.editItemRemove}
        showEditItem={this.state.showEditItem}
        editItemOnKeyHandler={this.editItemOnKeyHandler}
        id={this.props.id}
        updateData={this.props.updateData}
      />
    );
  }
}

export default ItemContainer;
