// Dependencias
import React from 'react';
import { render } from 'react-dom';
import List from '../list/components/list';

// Simulamos la data de un API desde un archivo JSON
import data from '../api.json';

// Almacenamos en una constante la referencia al elemento con ID app
const app = document.getElementById('app');

// Renderizamos dentro de app, el componente List con la Data como Props
render(<List data={data}/>, app);
