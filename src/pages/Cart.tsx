import React from 'react'
import { cartStore } from '../store/cartStore'

const Cart = () => {
    const cartItems = cartStore((state) => state.items);
  return (
    <div style={{height: "80vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <h2 style={{fontSize: "25px"}}>Total Products in Cart - {cartItems}</h2>
    </div>
  )
}

export default Cart