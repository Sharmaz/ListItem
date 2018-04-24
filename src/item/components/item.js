// Dependencias
import React from 'react';
import ItemOptions from './items-options';

import './item.css';

/**
 * Rendereamos el titulo del item
 * Le pasamos como props al h3 la función showHideItemOptions a ejecutarse al click
 */
const Item = (props) => (
  <div className="List-item">
    <h3 onClick={props.showHideItemOptions}>{props.name}</h3>
    {
      props.itemOptions &&
      <ItemOptions />
    }
  </div>
);

export default Item;
