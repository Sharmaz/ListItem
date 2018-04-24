// Dependencias
import React from 'react';

// Creamos el componente que tendrá el Layout de la aplicación
const HomeLayout = (props) => (
  <section>
    {
      // Rendereamos los hijos de este componente, mas componentes, elementos o props
      props.children
    }
  </section>
);

export default HomeLayout;
