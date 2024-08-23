'use client'
import { addC } from '@redux/cartSlice'
import { all } from '@redux/itemsSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Shop = () => {
  const items=useSelector(all)
  const dispatch=useDispatch()
  const handleAdd=(item)=>{
    dispatch(addC(item))
  }
  return (
    <div>
      <h1>SHOP</h1>
      <ul>
        {items.map((item)=>(
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <div>
              {item.image.map((img,index)=>(
                <Image src={img} key={index} width={40} height={40} alt='k'/>
              ))}
            </div>
            <button onClick={()=>handleAdd(item)}>ADD</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Shop