// Dependencias
import React from 'react';
import Item from '../../item/components/item';

// Creamos un componente funcional List
const List = (props) => (
  <div className="list">
    <h3>{props.name}</h3>
    <div className="items">
      {
        // Recorremos el array items en el elemento 2 del array de listas
        props.items.map((item) => {
          // Retornamos un componente Item por cada elemento del array
          return <Item {...item} key={item._id}/>
        })
      }
    </div>
  </div>
)


export default List;
