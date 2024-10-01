import React from "react";
import { IoCartSharp } from "react-icons/io5";
import { useGlobalContext } from "./context";

function Navbar() {
  const { totalAmount } = useGlobalContext();

  return (
    <section className='navbar'>
      <div className='navbar-container'>
        <h1>CART</h1>
        <div className='icon-container'>
          <IoCartSharp className='cart-icon' />
          <div className='amount-container'>
            <p className='cart-amount'>{totalAmount}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
