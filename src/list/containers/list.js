// Dependencias
import React, { Component } from 'react';
import DefaultList from '../components/default-list';
import NormalList from '../components/normal-list';

class ListContainer extends Component {
  /**
   * Vamos a utilizar propiedades para mostrar un tipo de lista Default y Normal
   * Tambien vamos a mostrar u ocultar los items de la lista con hideShow
   */
  state = {
    defaultList: true,
    hideShow: false
  }

  hideShowList = (event) => {
    // Cuando ocurra un evento (click) vamos a cambiar el estado de hideShow y defaultList
    this.setState({
      hideShow: !this.state.hideShow,
      defaultList: !this.state.defaultList
    });
  }

  render() {
    return (
      <div>
        {
          // Rendereamos la lista Default si defaultList es true y le pasamos propiedades
          this.state.defaultList?
            <DefaultList
              name={this.props.name}
              hideShow={this.state.hideShow}
              hideShowList={this.hideShowList}
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
