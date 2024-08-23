'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const cartItems=useSelector(state=>state.cart.items)
  const dispatch = useDispatch()
}

export default Cart