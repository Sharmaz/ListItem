// Dependencias
import React from 'react';
import ItemOptions from './items-options';
import EditItemFormContainer from '../../forms/containers/edit-item-form';

import './item.css';

/**
 * Rendereamos el titulo del item
 * Le pasamos como props al h3 la función showHideItemOptions a ejecutarse al click
 */
const Item = (props) => (
  <div className="List-item">
    {
      /**
       * Si showEditItem es true, mostramos el formulario, si es false el nombre del item
       * Mandamos por props el id del item y la función para actualizar la data del estado
       */
      props.showEditItem ?
        <EditItemFormContainer
          id={props.id}
          editItemRemove={props.editItemRemove}
          editItemOnKeyHandler={props.editItemOnKeyHandler}
          updateData={props.updateData}
        />
      :
      <h3 onClick={props.showHideItemOptions}>{props.name}</h3>
    }
    {
      // Si itemOptions es true mostramos los botones de borrar/editar item
      props.itemOptions &&
      <ItemOptions
        deleteItem={props.deleteItem}
        editItem={props.editItem}
      />
    }
  </div>
);

export default Item;
