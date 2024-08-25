'use client'
import { assets } from '@public/assets'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Nav = () => {
  const path=usePathname()
  return (
    <nav className='items-center px-40 w-full  h-20 border-b flex flex-row justify-between'>
      <div className='flex flex-row items-center'>
        <Image src={'ll.svg'} alt='logo' height={60} width={60}/>
        <p className='font-serif font-extrabold'>MEHRAB<br/> ECOM</p>
      </div>
      
      <div className='flex flex-row justify-center items-center h-full my-auto gap-20 text-center ml-5'>
        <Link className={` ${path==='/'?' opacity-100 transition-all text-3xl ':' transition-all opacity-30 text-black text-2xl ' } `} href={'/'}>Home</Link>
        <Link className={` ${path==='/items'?' opacity-100 transition-all text-3xl ':' transition-all opacity-30 text-black text-2xl' } `} href={'/items'}>Collection</Link>
      </div>
      
      <div className='flex flex-row items-center relative gap-7'>
        
        <Image className='cursor-pointer' src={assets.search_icon} alt='logo' height={20} width={20}/>
        
        <div className='group'>
        <Image className='cursor-pointer' src={assets.profile_icon} alt='logo' height={20} width={20}/>
          <div className='group-hover:block hidden transition-all absolute bg-opacity-70 bg-gray-400 w-32 text-left right-14 top-6 p-3  rounded-lg opacity-65  '>
            <p>My profile</p>
            <p>Orders</p>
            <p>Logout</p>
          </div>
        </div>

        <Link href={'/cart'} className='relative'>
        <Image className='cursor-pointer' src={assets.cart_icon} alt='logo' height={20} width={20}/>
        <p className='absolute text-white bg-black rounded-full top-3 left-3 p-1 text-center text-xs w-5'>5</p>
        </Link>

        
      </div>

    </nav>
  )
}

export default Nav