// Dependencias
import React from 'react';

const Icon = (props) => {
  // Hacemos destructuring a las props color y size
  const { color, size } = props;

  return (
    // Las propiedades se las pasamos al elemento SVG y rendereamos los hijos en el SVG
    <svg
      height={size}
      width={size}
      fill={color}
      viewBox="0 0 32 32"
    >
      {props.children}
    </svg>
  );
}

export default Icon;
