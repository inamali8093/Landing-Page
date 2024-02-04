import React from 'react'

const Register = () => {
  return (
    <>
     <div className='w-full flex justify-center my-8'>
        <div className='w-[90%] bg-black h-[250px] rounded-xl p-6 flex flex-col justify-center items-center'>
           <div className='text-white text-center text-4xl font-bold'>
            <p><span className='text-[#F6E87B] italic'>Register</span> For Our In</p>
            <p>Free 7-Days Trial Now </p>
           </div>
           <div className='rounded mt-12 flex gap-2 justify-center bg-white p-1 w-[400px]'>
            <input type="text" placeholder='Email' className='h-10 p-2 rounded w-[400px]' />
            <button className='text-white bg-black p-2 rounded'>Register</button>
           </div>
        </div>
     </div> 
    </>
  )
}

export default Register
