// Dependencias
import React from 'react';
import ShowHide from './show-hide';
import ListHeader from './list-header';
import ListOptions from './list-options';
import AddItem from './add-item';
import AddItemFormContainer from '../../forms/containers/add-item-form';

import './list.css';

/**
 * En este componente rendereamos el titulo de la lista en ListHeader
 * Tambien el botón para mostrar/ocultar los items cambiando de lista normal a default
 */
const DefaultList = (props) => (
  <div className="List List-default">
    <ListHeader 
      name={props.name}
      hideShowListOptions={props.hideShowListOptions}
    />
    {
      /**
       * Si addNewItem es true vamos a mostrar el formulario para agregar item
       * le pasamos como props la función para remover el formulario luego del submit
       */
      props.addNewItem &&
      <AddItemFormContainer 
        addItemRemove={props.addItemRemove}
        addItemOnKeyHandler={props.addItemOnKeyHandler}
      />
    }
    {
      // Si listOptions es true mostramos el componente ListOptions
      props.listOptions &&
      <ListOptions
        addItem={props.addItem}
      />
    }
    {
      // Si el arreglo items esta vacío mostramos el botón de agregar item
      !props.items.length?
      <AddItem addItem={props.addItem} />
      :
      <ShowHide
      handleClick={props.hideShowList}
      hideShow={props.hideShow}
      />
    }
  </div>
);

export default DefaultList;
