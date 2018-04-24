// Dependencias
import React from 'react';
import ListHeader from './list-header';
import ShowHide from './show-hide';
import List from './list';

/** 
 * En este componente rendereamos el titulo de la lista en ListHeader
 * Tambien los items de la lista en List y el botón para mostrar/ocultar items
*/
const NormalList = (props) => (
  <div className="List">
    <ListHeader name={props.name}/>
    <List items={props.items}/>
    <ShowHide
      handleClick={props.hideShowList}
      hideShow={props.hideShow}
    />
  </div>
);

export default NormalList;
