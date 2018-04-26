// Dependencias
import React from 'react';
import ShowHide from './show-hide';
import ListHeader from './list-header';
import ListOptions from './list-options';
import AddItem from './add-item';
import AddItemFormContainer from '../../forms/containers/add-item-form';
import AddListFormContainer from '../../forms/containers/add-list-form';
import EditListFormContainer from '../../forms/containers/edit-list-form';

import './list.css';

/**
 * En este componente rendereamos el titulo de la lista en ListHeader
 * Tambien el botón para mostrar/ocultar los items cambiando de lista normal a default
 */
const DefaultList = (props) => (
  <div className="List List-default">
    {
      // Si addList es true, rendereamos el componente con el formulario de lista
      props.addList &&
      <AddListFormContainer
        addListRemove={props.addListRemove}
        addListOnKeyHandler={props.addListOnKeyHandler}
        updateData={props.updateData}
      />
    }
    {
      /**
       * Si editList es true mostramos el formulario para editar una lista
       * pasamos por props el id para editar la lista y updateData para actualizar la data
       */
      props.editList?
      <EditListFormContainer
        name={props.name}
        editListOnKeyHandler={props.editListOnKeyHandler}
        editListRemove={props.editListRemove}
        id={props.id}
        updateData={props.updateData}
      />
      :
      <ListHeader 
        name={props.name}
        hideShowListOptions={props.hideShowListOptions}
      />
    }
    {
      /**
       * Si addNewItem es true vamos a mostrar el formulario para agregar item
       * le pasamos como props la función para remover el formulario luego del submit
       * tambien le mandamos por props la función para actualizar la data en el estado
       * por ultimo le enviamos el id de la lista para agregar el item a esa lista
       */
      props.addNewItem &&
      <AddItemFormContainer 
        addItemRemove={props.addItemRemove}
        addItemOnKeyHandler={props.addItemOnKeyHandler}
        updateData={props.updateData}
        listId={props.id}
      />
    }
    {
      // Si listOptions es true mostramos el componente ListOptions
      props.listOptions &&
      <ListOptions
        addItem={props.addItem}
        editListHandler={props.editListHandler}
        deleteList={props.deleteList}
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
