'use client'
import { all } from '@redux/itemsSlice'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Text from './Text'
import Product from './Product'

const Latest = () => {
  const items=useSelector(all)
  const [latest,setLatest]=useState([])
  useEffect(()=>{
    setLatest(items.slice(1,11))
  },[])
  return (
    <div>
      <Text t1='LATEST' t2='COLLECTIONS't3='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque non incidunt aspernatur fuga sint porro accusamus tenetur aperiam laboriosam, voluptatem nostrum'/>
      <div className='grid grid-cols-5 my-7 gap-5'>
      {
        latest.map((item,index)=>(
          <Product key={index} id={item._id} image={item.image[0]} price={item.price} name={item.name}/>
        ))
      }
      </div>
    </div>
  )
}

export default Latest