import React from 'react';
import './NewCollections.css';
import new_collection from '../Assests/new_collections'
import Item from '../Item/Item';
const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className="collections">
        {new_collection.map((item,index)=>{
            return (
  <Item key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} olde_price={item.olde_price} price={item.price}/>
            )
        })}
        {/* {new_collection.map((collection, index) => {
          return (
            <div className="collection" key={index}>
              <img src={collection.image} alt=""/>
              <h3>{collection.name}</h3>
              <p>{collection.description}</p>
            </div>
          )
        })} */}
      </div>
    </div>
  )
}

export default NewCollections
