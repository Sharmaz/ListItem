// Dependencias
import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Lists from '../../lists/components/lists';
import Header from '../../layout/components/header';
import api from '../../api';

class Home extends Component {
  // Inicializamos el estado data inicial vacia, y addList para mostrar/ocultar formulario
  state = {
    addList: false,
    data: { "lists": [] }
  }

  // Vamos a mostrar/ocultar el formulario si addList es true o false
  addListHandler = (event) => {
    this.setState({
      addList: !this.state.addList,
    });
  }

  // Removeremos el formulario luego del submit
  addListRemove = () => {
    this.setState({
      addList: false
    });
  }
  
  // Removeremos el formulario si se presiona la tecla ESC
  addListOnKeyHandler = (event) => {
    if (event.keyCode === 27) {
      this.setState({
        addList: !this.state.addList,
      });
    }
  }

  // Actualizaremos la data cada vez que se llame a esta función
  updateData = async (event) => {
    // Obtenemos la data del API
    const lists = await api.lists.getList();

    // Actualizamos el estado con la nueva data
    this.setState({
      data: lists
    });
  }

  async componentDidMount() {
    // Despues de creado el componente hacemos llamado al API para obtener la data
    const lists = await api.lists.getList();

    // Actualizamos el estado con la data del API
    this.setState({
      data: lists
    });
  }

  render() {
    // Retornamos el Layout con el Header y las listas pasandole la data como props
    return (
      <HomeLayout>
        <Header addListHandler={this.addListHandler}/>
        <Lists
          addList={this.state.addList}
          lists={this.state.data.lists}
          addListRemove={this.addListRemove}
          addListOnKeyHandler={this.addListOnKeyHandler}
          updateData={this.updateData}
        />
      </HomeLayout>
    );
  }
}

export default Home;
