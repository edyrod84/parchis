import React from 'react';
import './Chips.css';

const Chips = ({color}) => {
  return (
    <div className='Chips' style={{backgroundColor: color}}>
      <div className='star'></div>
    </div>
  )
}

export default Chips