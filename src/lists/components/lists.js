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
         * Le pasamos id para modificar/elimnar la lista desde API
         */ 
        return <ListContainer {...item} key={item._id} id={item._id} updateData={props.updateData}/>;
      })
    }
    {
      /**
       * En el caso de que addList sea true, mostramos un ListContainer con formulario
       * Le pasamos updateData para actualizar la data al submit del formulario
       */
      props.addList &&
      <ListContainer
        name=""
        items={[]}
        addList={props.addList}
        addListRemove={props.addListRemove}
        addListOnKeyHandler={props.addListOnKeyHandler}
        updateData={props.updateData}
      />
    }
  </div>
);

export default Lists;