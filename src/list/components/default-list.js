// Dependencias
import React from 'react';
import ShowHide from './show-hide';
import ListHeader from './list-header';

import './list.css';

/**
 * En este componente rendereamos el titulo de la lista en ListHeader
 * Tambien el botón para mostrar/ocultar los items cambiando de lista normal a default
 */
const DefaultList = (props) => (
  <div className="List List-default">
    <ListHeader name={props.name}/>
    <ShowHide
      handleClick={props.hideShowList}
      hideShow={props.hideShow}
    />
  </div>
);

export default DefaultList;
