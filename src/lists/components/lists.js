// Dependencias
import React from 'react';
import ListContainer from '../../list/containers/list';

import './lists.css';

// Creamos un componente mostrar las multiples listas
const Lists = (props) => (
  <div className="Lists">
    {
      // Iteramos en el arreglo de listas
      props.lists.map((item) => {
        /**
         * Retornamos List pasandole los props con el spread operator ...item 
         * Tambien le pasamos una key para que React identifique los cambios
         * de los elementos de un array
         */ 
        return <ListContainer {...item} key={item._id} />;
      })
    }
    {
      // En el caso de que addList sea true, mostramos un ListContainer con formulario
      props.addList &&
      <ListContainer
        name=""
        items={[]}
        addList={props.addList}
        addListRemove={props.addListRemove}
        addListOnKeyHandler={props.addListOnKeyHandler}
      />
    }
  </div>
);

export default Lists;