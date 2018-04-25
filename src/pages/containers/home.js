// Dependencias
import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Lists from '../../lists/components/lists';
import Header from '../../layout/components/header';

// API Hardcodeada de un JSON
import data from '../../api.json';

class Home extends Component {
  // Inicializamos el estado con la data, y addList para mostrar/ocultar formulario
  state = {
    addList: false,
    data
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
        />
      </HomeLayout>
    );
  }
}

export default Home;
