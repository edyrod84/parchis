import React from 'react';
import Chips from '../Chips/Chips';
import './UserBox.css'

const UserBox = ({color}) => {
  return (
    <div 
    className='UserBox' 
    style={{backgroundColor: color}}>
      <Chips color={color}/>
      <Chips color={color}/>
      <Chips color={color}/>
      <Chips color={color}/>
    </div>
  )
}

export default UserBox