import React from 'react'

const Text = ({t1,t2,t3}) => {
  return (
    <>
    <div className='text-4xl inline-flex justify-center items-center mx-auto w-full mt-14'>
      <p className='text-gray-400'>{t1}<span className='opacity-100 ml-3 text-black'>{t2}</span></p>
      <p className='flex bg-gray-400 h-[3px] w-12 my-auto mx-3'></p>
      <br/>
    </div>
    <p className='w-3/4 mb-14 flex mx-auto items-center font-serif justify-center  text-gray-700 opacity-50'>{t3}</p>

    </>
  )
}

export default Text