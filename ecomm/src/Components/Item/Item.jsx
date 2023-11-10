import React from 'react';
import './Item.css';
const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt=''/>
      
        <h3>{props.name}</h3>
        <div className='item-prices'>
          <div className="item-price-new">
${props.new_price}
          </div>
          <div className="item-price-old">
${props.old_price}
          </div>
        </div>
        <p>{props.price}</p>
  
    </div>
  )
}

export default Item
