'use client'
import { cartItems, remC, upC } from '@redux/cartSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const items=useSelector(cartItems)
  const dispatch=useDispatch()

  const rem=(id)=>{
    dispatch(remC(id))
  }

  const quantityC=(id,quantity)=>{
    dispatch(upC({id,quantity}))
  }

  return(
    <div>
      <h1>CART</h1>
      <ul>
        {items.map((item)=>(
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button onClick={() => rem(item.id)}>Remove</button>
            <button onClick={() => quantityC(item.id, item.quantity + 1)}>Increase Quantity</button>
            <button onClick={() => quantityC(item.id, item.quantity - 1)}>Decrease Quantity</button>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default Cart