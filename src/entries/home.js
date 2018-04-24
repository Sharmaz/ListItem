// Dependencias
import React from 'react';
import { render } from 'react-dom';
import Item from '../item/components/item';

// Almacenamos en una constante la referencia al elemento con ID app
const app = document.getElementById('app');

// Renderizamos dentro del elemento HTML con ID app, el componente Item con el prop name
render(<Item name="Dibujar Wireframes"/>, app);
