'use client'
import { addC } from '@redux/cartSlice'
import { all } from '@redux/itemsSlice'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Text from './Text'
import Product from './Product'

const Shop = () => {
  const items=useSelector(all)
  const dispatch=useDispatch()
  const [category,setcategory]=useState([])
  const [type,settype]=useState([])

  const [filtered,setFiltered]=useState([])
  const toggleC=(e)=>{
    if(category.includes(e.target.value)){
      setcategory(prev=>prev.filter(s=>s!==e.target.value))
    }
    else{
      setcategory(prev=>[...prev,e.target.value])
    }
  }

  useEffect(()=>{
    setFiltered(items)
  },[])

  useEffect(()=>{
    console.log(category)    
  },[category])

  return (
    <div className='flex flex-row w-full'>
      {/**Menu */}
      <div className='flex flex-col gap-5 mt-14 pr-14'>
        <h2 className='text-2xl'>Filters</h2>
        <div  className='p-3 gap-3 border rounded-sm min-w-60 flex flex-col'>
          <h3 className=''>CATEGORIES</h3>
          <p className='flex gap-2 font-sans font-normal'>
            <input type='checkbox' value={'Men'} onChange={toggleC}/>Men
          </p>
          <p className='flex gap-2 font-sans font-normal'>
            <input type='checkbox' value={'Women'} onChange={toggleC}/>Women
          </p>
          <p className='flex gap-2 font-sans font-normal'>
            <input type='checkbox' value={'Kids'} onChange={toggleC}/>Kids
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
      
      
      <div className='flex flex-col w-full '>
        <div className='flex flex-row justify-between w-full'>
         <Text t1='ALL' t2='COLLECTIONS' classz='w-fit mx-0' />
          <select className='border-2 h-min  mt-12 p-2'>
            <option>Sort by: Relevant</option>
            <option>Sort by: Low to High</option>
            <option>Sort by: High to Low</option>
          </select>
        </div>


        <div>
        <div className='grid grid-cols-4 my-7 gap-5'>
      {
        filtered.map((item,index)=>(
          <Product key={index} id={item._id} image={item.image[0]} price={item.price} name={item.name}/>
        ))
      }
      </div>
        </div>
      </div>

    </div>
  )
}

export default Shop