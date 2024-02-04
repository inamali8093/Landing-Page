import React from 'react'
import { Shirt } from 'lucide-react'
import Logo from './Logo'

const UpperHeader = () => {
  return (
    <>
     <div className='w-full bg-[#F6E87B] flex justify-center items-center p-2 gap-3'>
       <Logo />
       <a href="#" className='text-[#421363] font-medium underline'>
        Click Here
       </a>
       <span className='font-medium'>
        To Experience Our Integrations With Plateforms More Easily
       </span>

        
     </div> 
    </>
  )
}

export default UpperHeader
