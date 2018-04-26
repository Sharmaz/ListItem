// Dependencias
import React from 'react';
import ItemContainer from '../../item/containers/item';

import './list.css';

const List = (props) => (
  <div className="items">
    {
      props.items.map((item) => {
        /**
         * Retornamos un componente Item por cada elemento del array
         * Pasamos como props el id del item y la función para actualizar la data
         */
        return (
          <ItemContainer
          {...item}
          key={item._id}
          id={item._id}
          updateData={props.updateData}/>
        );
      })
    }
  </div>
);

export default List;
