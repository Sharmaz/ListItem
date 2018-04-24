// Dependencias
import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';

// Almacenamos en una constante la referencia al elemento con ID app
const app = document.getElementById('app');

// Renderizamos dentro de app, el componente Home
render(<Home />, app);
