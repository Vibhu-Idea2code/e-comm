// Navbar.js

import React,  { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // You can create a separate CSS file for styling
// import Home from '../../Pages/Home';
import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png';

function Navbar() {
  const [menu, setMenu] = useState("shops")
  return (
    <nav className="navbar">
      <div className="navbar-logo">
          <img src={logo} alt="logo" />
      <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        {/* {menu==="shop"?<hr/>:<></>} anathi simple click krvathi hover thay */}
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>} 
          {/* <Link to="/">Home</Link> */}
        </li>
        <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="men"?<hr/>:<></>}
          {/* <Link to="/about">About</Link> */}
        </li>
        <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}
          {/* <Link to="/cart">Cart</Link> */}
        </li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
      <Link to='/login'><button>Login</button></Link>
      <Link to='/cart'><img src={cart_icon} alt="cart icon" /></Link>
        <div className="nav-cart-count">0</div>
        {/* <Link to="/login">Login</Link>
        <Link to="/cart">Cart</Link> */}
      </div>
      {/* <ul className="navbar-list">
        <li className="navbar-item"><Link  to={"/Home"}>Home</Link></li>
        <li className="navbar-item"><Link to={"/About"}>About</Link></li>
        <li className="navbar-item"><Link to={"/contact"}>Contact</Link></li>
      </ul> */}
    </nav>
  );
}

export default Navbar;
