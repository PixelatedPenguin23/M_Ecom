import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product = ({image,id,price,name}) => {
  const currency='$'
  
  return (
    <Link className='overflow-hidden cursor-pointer text-gray-700' href={`/product/${id}`}>
    <div className='overflow-hidden overflow-x-hidden'>
      <Image className='overflow-hidden hover:scale-110 transition-all ease-in-out' src={image}/>
    </div>
    <p>{name}</p>
    <p>{price}{currency}</p>
    </Link>
  )
}

export default Product