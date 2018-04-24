// Dependencias
import React from 'react';
import Icon from './icon';

const Hide = (props) => (
  // Le pasamos todas las props a Icon con el Spread Operator
  <div className="List-action-icon">
    <Icon {...props}>
      <path d="M31.1185928,13.063077 L18.3053959,0.832060466 C17.6759756,0.229854217 16.8304642,-0.0373315433 16.0009058,0.00419992208 C15.1727976,-0.0373315433 14.3272861,0.228469835 13.6978659,0.832060466 L0.883218672,13.063077 C-0.294406224,14.1844266 -0.294406224,16.018733 0.883218672,17.1386982 L1.95497335,18.1589878 C3.12679714,19.2803374 5.04986439,19.2803374 6.22168818,18.1589878 L15.9994555,8.82548317 L25.7772228,18.1589878 C26.9504968,19.2803374 28.8735641,19.2803374 30.0439376,18.1589878 L31.1127917,17.1386982 C32.2947675,16.0201174 32.2947675,14.1844266 31.1185928,13.063077 Z"></path>
    </Icon>
  </div>
);

export default Hide;
