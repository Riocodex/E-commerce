import React from 'react'
import './item.css'
const item = () => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
    </div>
  )
}

export default item