import React from 'react'
import "./CartItem.css"
import { useStateValue } from '../StateProvider'


const CartItems = ({id,title,rating,price,image}) => {
    
    const [{cart},dispatch]=useStateValue();

    const removeItem=()=>{
        dispatch({
            type:'REMOVE_FROM_CART',
            id:id,
        });
    }
    return (
        <div className="item">
        <img className="item__Image" src={image} alt="item"/>
        <div className="item__Info">
        
        <p className="item__title">
        {title}
        </p>

        <p className="item__price">
        {price}
        </p>
        
        <div className="item__Rating">
        {
          Array(rating).fill().map((_,index) =>(
           
          <p  key={index}>⭐</p>
          ))}
        </div>
        <div>
          <small>In stock</small>
          </div>
          <small>Eligible for FREE Shipping</small>
          <div>
        
        <button onClick={removeItem} className="item__Remove">Remove</button>
        </div>
        </div>  
        </div>
    )
}

export default CartItems
