import React from 'react'
import Logo from './Logo'

const Header = () => {
  return (
    <>
     <div className='w-full p-6 text-[#421363] grid grid-cols-3 font-medium bg-[#F4F3E1] sticky top-0 z-50'> 
        {/* logo  */}
        <div className='flex items-center gap-2 px-14'>
           <Logo />
           <span className='text-[#421363] text-2xl font-bold'>Jobs</span>
        </div>

        {/* navbar */}
        <div className='flex items-center justify-between font-bold hover:cursor-pointer'>
          <span className=''>
            Find Jobs
          </span>
          <span>
            Salary Tools
          </span>
          Upload Resume
        </div>

        {/* button */}
        <div className='ml-10 flex items-center justify-center gap-3'>
            <button className='p-2 outline rounded-lg w-[100px] hover:cursor-pointer'>Login</button>
            <button className='text-white bg-[#421363] p-2 rounded-lg hover:cursor-pointer'>Create Account</button>
        </div>

     </div> 
    </>
  )
}

export default Header
