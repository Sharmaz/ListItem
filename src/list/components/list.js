// Dependencias
import React from 'react';
import ItemContainer from '../../item/containers/item';

import './list.css';

// Creamos un componente funcional List
const List = (props) => (
  <div className="items">
    {
      // Recorremos el array items en el elemento 2 del array de listas
      props.items.map((item) => {
        // Retornamos un componente Item por cada elemento del array
        return <ItemContainer {...item} key={item._id}/>
      })
    }
  </div>
);

export default List;
