import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Contexts/ShopContext';
import dropdown_icon from '../Components/Assests/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const {all_product}= useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt=''/>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt=""/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,index)=>{
          if(props.category===item.category){
            return  <Item key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} olde_price={item.olde_price} price={item.price}/>
          }
          else{
            return null
          }
        })}
        
      </div>
    </div>
  )
}

export default ShopCategory
