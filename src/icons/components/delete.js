import React from 'react';
import Icon from './icon';

const Delete = (props) => (
    // Le pasamos todas las props a Icon con el Spread Operator
    <div className="List-action-icon">
      <Icon {...props}>
        <path d="M30.9183469,6.30289703 L21.2225353,15.9997818 L30.9183469,25.6962073 C32.360551,27.1389719 32.360551,29.4760576 30.9183469,30.9188222 C30.1977501,31.6394237 29.2530004,32 28.3087099,32 C27.3628577,32 26.4180161,31.6399749 25.6979705,30.9188222 L16.0000459,21.2212944 L6.30285631,30.9187304 C5.5823514,31.6393318 4.63750974,31.9999081 3.69239249,31.9999081 C2.74755084,31.9999081 1.80335225,31.639883 1.08220427,30.9187304 C-0.359999828,29.4766088 -0.359999828,27.1394312 1.08220427,25.6961154 L10.7777403,15.99969 L1.08165307,6.30289703 C-0.360551024,4.86068362 -0.360551024,2.52304667 1.08165307,1.08083326 C2.52358157,-0.360277753 4.85982543,-0.360277753 6.30230512,1.08083326 L15.9999541,10.777718 L25.6968681,1.08083326 C27.1396234,-0.360277753 29.4761428,-0.360277753 30.9177957,1.08083326 C32.360551,2.52304667 32.360551,4.86068362 30.9183469,6.30289703 Z"></path>
      </Icon>
    </div>
  );

export default Delete;