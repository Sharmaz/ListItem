// Dependencias
import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Lists from '../../lists/components/lists';

// API Hardcodeada de un JSON
import data from '../../api.json';

class Home extends Component {
  // Inicializamos el estado con la data
  state = {
    data
  }

  render() {
    // Retornamos el Layout y a las listas le pasamos la data como props
    return (
      <HomeLayout>
        <Lists lists={this.state.data.lists}/>
      </HomeLayout>
    );
  }
}

export default Home;
