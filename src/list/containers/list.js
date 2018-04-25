// Dependencias
import React, { Component } from 'react';
import DefaultList from '../components/default-list';
import NormalList from '../components/normal-list';

class ListContainer extends Component {
  /**
   * Vamos a utilizar propiedades para mostrar un tipo de lista Default y Normal
   * Tambien vamos a mostrar u ocultar los items de la lista con hideShow
   * Con listOptions se mostrará u ocultará las opciones de editar y eliminar lista
   */
  state = {
    addNewItem: false,
    defaultList: true,
    hideShow: false,
    listOptions: false
  }

  addItem = (event) => {
    // Cuando ocurra el evento vamos a mostrar el formulario para agregar item
    this.setState({
      addNewItem: !this.state.addNewItem,
      listOptions: false
    });
  }

  addItemRemove = (event) => {
    // Vamos a remover el formulario cuando hagamos submit
    this.setState({
      addNewItem: false
    })
  }

  addItemOnKeyHandler = (event) => {
    // Removeremos el formulario si se presionar la tecla ESC
    if (event.keyCode === 27) {
      this.setState({
        addNewItem: !this.state.addNewItem,
      })
    }
  }

  hideShowList = (event) => {
    // Cuando ocurra un evento (click) vamos a cambiar el estado de hideShow y defaultList
    this.setState({
      hideShow: !this.state.hideShow,
      defaultList: !this.state.defaultList
    });
  }

  hideShowListOptions = (event) => {
    /**
     * Al click, cambiaremos el estado de listOptions de false a true o true a false
     * Asi mostraremos o no los botones para editar y eliminar en el DefaultList
     */
    this.setState({
      listOptions: !this.state.listOptions
    })
  }

  render() {
    return (
      <div>
        {
          // Rendereamos la lista Default si defaultList es true y le pasamos propiedades
          this.state.defaultList?
            <DefaultList
              name={this.props.name}
              items={this.props.items}
              hideShow={this.state.hideShow}
              hideShowList={this.hideShowList}
              listOptions={this.state.listOptions}
              hideShowListOptions={this.hideShowListOptions}
              addNewItem={this.state.addNewItem}
              addItem={this.addItem}
              addItemRemove={this.addItemRemove}
              addItemOnKeyHandler={this.addItemOnKeyHandler}
            />
          :
          // De lo contrario rendereamos una lista normal y le pasamos propiedades
            <NormalList
              name={this.props.name}
              hideShow={this.state.hideShow}
              hideShowList={this.hideShowList}
              items={this.props.items}
            />
        }
      </div>
    );
  }
}

export default ListContainer;
