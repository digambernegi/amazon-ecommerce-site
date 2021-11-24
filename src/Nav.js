import React from 'react'
import './Nav.css'
import applogo from "./asset//applogo.svg"
import {Link} from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import {useStateValue} from "./StateProvider"


const Nav = () => {

  //1.action, 2.initiate action
const [{cart}]=useStateValue();

    return (
        <nav className="Navbar">
        <Link to="/">
        <img className="logo" src={applogo} alt="logo" />
        </Link>
        <div className="option">
          <span className="span1">Hello</span>
          <span className="span2">India,IN</span>
          </div>
        <div className="search">
        <input className="input" placeholder="Search products here..." type="text" />
        <FiSearch className="search__Icon"/>    
        </div>
          
          <div className="user">

          <Link to="/Login" className="user__Option">
          <div className="option">
          <span className="span1">Hello,Dsn</span>
          <span className="span2">SignIn</span>
          </div>
          </Link>

          <Link to="/Login" className="user__Option">
          <div className="option">
          <span className="span1">Return &</span>
          <span className="span2">Order</span>
          </div>
          </Link>

          <Link to="#" className="user__Option">
          <div className="option">
          <span className="span1">Your</span>
          <span className="span2">Prime</span>
          </div>
          </Link>

        <Link to="/Checkout" className="checkout">
        <div className="basket">
        <FiShoppingCart className="cart"/>
        <small>{cart?.length}</small>
        </div>
        </Link>
        </div>
        </nav>
    )
}

export default Nav
