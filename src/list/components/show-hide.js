// Dependencias
import React from 'react';
import Show from '../../icons/components/show';
import Hide from '../../icons/components/hide';

import './show-hide.css';

const ShowHide = (props) => (
  <div className="List-action">
  {
    // Si la propiedad hideShow es false, mostramos el botón con el icono Show
    !props.hideShow?
      <button onClick={props.handleClick}>
        <Show size={25} color="black"/>
      </button>
    :
    // si la propiedad hideShow es true, mostramos el botón con el icono Hide
      <button onClick={props.handleClick}>
        <Hide size={25} color="black"/>
      </button>
  }
  </div>
);

export default ShowHide;
