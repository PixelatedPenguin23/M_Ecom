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
    <div className='flex flex-row'>
      {/**Menu */}
      <div className='flex flex-col gap-5 mt-14'>
        <h2 className='text-2xl'>Filters</h2>
        <div  className='p-3 gap-3 border rounded-sm min-w-60 flex flex-col'>
          <h3 className=''>CATEGORIES</h3>
          <p className='flex gap-2 font-sans font-normal'>
            <input type='checkbox'/>Men
          </p>
          <p className='flex gap-2 font-sans font-normal'>
            <input type='checkbox'/>Women
          </p>
          <p className='flex gap-2 font-sans font-normal'>
            <input type='checkbox'/>Kids
          </p>
        </div>
        
        <div className='p-3 gap-3 border rounded-sm min-w-60 flex flex-col'>
        <h3 className=''>Type</h3>
          <p className='flex gap-2 font-sans font-normal'>
            <input type='checkbox'/>Topwear
          </p>
          <p className='flex gap-2 font-sans font-normal'>
            <input type='checkbox'/>Bottomwear
          </p>
          <p className='flex gap-2 font-sans font-normal'>
            <input type='checkbox' />Winterwear
          </p>
        </div>
      </div>
      {/**Right */}
      <div>
        
      </div>

    </div>
  )
}

export default Shop