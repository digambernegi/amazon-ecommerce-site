import React from 'react'
import "./Total.css"
import {useState, useStateValue} from "./StateProvider"
import CurrencyFormat from "react-currency-format";
import { getTotal } from './reducer';

const Total = () => {
    const[{cart},dispatch]=useStateValue();
    return (
        <div className="subTotal">
            <CurrencyFormat 

            renderText={(value) => (
                <>
                <p>
                   subTotal({cart.length} items):
                   <strong>{value}</strong>
                   </p>
                   <small className="gift"><input type="checkbox" />skdshjdjks</small> 
                </>
            )}

            decimalScale={2}
            value={getTotal(cart)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}     
            />
            <button>Proceed to checkout</button>
        </div>
    )
}
export default Total
