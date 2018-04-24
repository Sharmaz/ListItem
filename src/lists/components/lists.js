// Dependencias
import React from 'react';
import List from '../../list/components/list';

// Creamos un componente mostrar las multiples listas
const Lists = (props) => (
  <div>
    {
      // Iteramos en el arreglo de listas
      props.lists.map((item) => {
        /**
         * Retornamos List pasandole los props con el spread operator ...item 
         * Tambien le pasamos una key para que React identifique los cambios
         * de los elementos de un array
         */ 
        return <List {...item} key={item._id} />;
      })
    }
  </div>
);

export default Lists;