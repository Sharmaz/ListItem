// Dependencias
import React, { Component } from 'react';
import Item from '../components/item';

class ItemContainer extends Component {
  // Con itemOptions se mostrará o no los botones para editar o eliminar un item
  state = {
    itemOptions: false
  }

  showHideItemOptions = (event) => {
    // Al click, cambiaremos el estado de itemOptions de falso a verdadero y viceversa
    this.setState({
      itemOptions: !this.state.itemOptions
    });
  }

  render() {
    return (
      <div>
        <Item
          name={this.props.name}
          itemOptions={this.state.itemOptions}
          showHideItemOptions={this.showHideItemOptions}
        />
      </div>
    );
  }
}

export default ItemContainer;
