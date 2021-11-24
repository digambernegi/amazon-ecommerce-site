import React from 'react'
import "./Checkout.css"
import applogo from "./asset/applogo.svg"
import { useStateValue } from './StateProvider'
import CartItem from "./CartItems"
import Total from "./Total"


const Checkout = () => {
const [{cart}]=useStateValue();

    return (
        <div className="checkout">
        <img className="checkout__image" src="https://images-eu.ssl-images-amazon.com/images/G/3…PC_Electronicsaccessories_underRs999_1500x300.jpg" alt="logo" />
        <div className="wrapper">
        {cart?.length === 0?(
            <div>
                <h1>Your cart in empty</h1>
            </div>
        ):(
            <div>
            <h1>Your cart</h1>
            {
                cart.map(item =>(
                    <CartItem
                    id={item.id}
                    title={item.title}
                    rating={item.rating}
                    price={item.price}
                    image={item.image}
                    />
                ))
            }
        </div>
        )}
        </div>
        {cart.length >0 && (
            <div className="total">
             <Total/>   
            </div>
        )}
        </div>
    );
}

export default Checkout
