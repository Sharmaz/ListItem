// Dependencias
import React from 'react';
import './header.css';

/**
 * Creamos un componente que nos dará el nombre del usuario (provisional por ahora)
 * Tambien el botón para agregar listas
 */
const Header = (props) => (
  <div className="Header">
    <h2>Guest User</h2>
    <div className="AddListButton">
      <button 
        onClick={props.addListHandler}
      >
      Add List
      </button>
    </div>
  </div>
);

export default Header;
