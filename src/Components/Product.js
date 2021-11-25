import React from 'react'
import "./Product.css"
import { useStateValue } from '../StateProvider'


const Product = ({id,title,rating,price,image}) => {
const[{cart},dispatch]=useStateValue();

const AddToCart = () => {
    dispatch({
      type:'ADD_TO_CART',
      payload:{
        id:id,
        title:title,
        rating:rating,
        price:price,
        image:image,
         
      },
    });
  };
    return (
        <div className="product">
        <div className="product__Info">
        <p>{title}</p>
        <p className="product__Price">
        <small>₹</small>
        <strong>{price}</strong>
        </p>

        <div className="product__Rating">
        {
          Array(rating).fill().map((_) =>(
          <p>⭐</p>
          ))}
        </div>
        </div>
        
        <img className="product__Image" src={image} alt="productimage" />
        <button onClick={AddToCart}>Add to cart</button>
        
        </div>
    )
}

export default Product
