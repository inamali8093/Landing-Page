import React from 'react'
import ProcessCard from './ProcessCard'
import { Shirt,Facebook,InstagramIcon,Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <>
     <div className='w-full bg-black p-8 grid grid-cols-3'>
      
      <div>
      <div className='border-black/30 border-2 mx-8 rounded-3xl bg-black flex flex-col'>
      <div className='flex items-center'>
         <div className='h-[100px] p-8 flex  items-center'>
            <div className='bg-[#F6E87B] p-4 rounded-full'>
            <Shirt />
            </div>
         </div>
         <div className='text-xl font-bold text-[#F6E87B]'>
            Jobs
         </div>
         </div>
         <p className='py-4 px-8 font-semibold text-white'>We Understand That For You, It's Never Just A Job It's Your Business. That's Why We're Passionate Aboout Not Only Finding You A Quality Employee. But Also The Perfect Fit.</p>
         <div className='flex gap-4 px-8'>
         <div className='bg-[#F6E87B] p-4 rounded-full'>
            <Facebook />
            </div>
         <div className='bg-[#F6E87B] p-4 rounded-full'>
            <InstagramIcon />
            </div>
         <div className='bg-[#F6E87B] p-4 rounded-full'>
            <Twitter />
            </div>
         </div>
      </div>
      </div>

      <div className='grid grid-cols-2'>
        <div className='grid grid-rows-5 text-white py-8'>
            <h2 className='text-2xl font-semibold'>About us</h2>
            <p>Jobs</p>
            <p>Freelancers</p>
            <p>Blogs</p>
            <p>Security & Policy</p>
        </div>
        <div className='grid grid-rows-5 text-white py-8'>
            <h2 className='text-2xl font-semibold'>Our Experts Are</h2>
            <p>Developers</p>
            <p>Data Scientists</p>
            <p>Project/Product Managers</p>
            <p>Designers</p>
        </div>
      </div>


      <div className='text-white py-8 px-6'>
        <h2 className='text-2xl font-semibold'>Newsletter</h2>
        <p className='my-6'>Receive news and promotions</p>
        <div className='rounded flex gap-2 justify-center bg-white p-1 w-[400px]'>
            <input type="text" placeholder='Email' className='h-10 p-2 rounded w-[400px]' />
            <button className='text-white bg-black p-2 rounded'>Register</button>
           </div>
      </div>

    </div> 
    </>
  )
}

export default Footer
