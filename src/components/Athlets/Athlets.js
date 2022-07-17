import React from 'react';
import './Athlets.css';
import AthletsDesc from '../AthletsDesc/AthletsDesc';

const Athlets = () => (
    <div className='Athlets_section'>
      <div className='Athlets_header'>
        <span>ATHLETS</span>
      </div>
      <div className='Athlets_body'>
        <AthletsDesc />
      </div>
    </div>
);


export default Athlets;
