import React from 'react'
import "./Checkout.css"
import { useStateValue } from '../StateProvider'
import CartItems from "./CartItems"
import Total from "./Total"


const Checkout = () => {
const [{cart}]=useStateValue();

    return (
        <div className="checkout">
        <img className="checkout__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/D23947948_IN_CEPC_Clearance-store_May21_rush_1500x300.jpg" alt="banner" />
        {cart?.length === 0?(
            <div>
                <h1>Your cart in empty</h1>
            </div>
        ):(
            <div className="checkout__Title">
            <h1>Shopping Cart</h1>
            <div className="checkout__leeft">
            {
                cart?.map((item,index) =>(
                    <CartItems
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                    ))}
                </div>
                    {cart.length > 0 && (
                        <div className="checkout__Right">
                        <Total/>
                        </div>
            )}
        </div>
        )}
            </div>
            );
}

export default Checkout
