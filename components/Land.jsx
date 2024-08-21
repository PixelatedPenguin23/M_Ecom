import Image from 'next/image'
import React from 'react'

const Land = () => {
  return (
    <div className=''>
    <Image
    alt='land'
    height={736}
    width={736}
    src={'/land.jpg'}
    layout="responsive"
    objectFit='contain'
    />
    </div>
  )
}

export default Land