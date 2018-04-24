// Dependencias
import React from 'react';
import Item from '../../item/components/item';
import './list.css';

// Creamos un componente funcional List
const List = (props) => (
  <div className={`List Item-${props.items.length}`}>
    <h2 className="List-title">{props.name}</h2>
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
