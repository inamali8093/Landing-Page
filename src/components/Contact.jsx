import React from 'react'

const Contact = () => {
  return (
    <>
     <div className='w-full p-8 px-20'>
       <div className='text-3xl font-bold'>
        <h2>LET'S DISCUSS YOUR PROJECT AND</h2>
        <h2>FIND OUT A PERFACT EMPLOYEE</h2>
        <h2>TOGETHER?</h2>
       </div>

       <div className='my-10 flex justify-between'>
        {/* image */}
        <div className='w-[35%]'>
            <img src="./man3.jpg" className='w-full rounded-xl overflow-hidden' alt="" />
        </div>
        {/* contact */}
        <div className='w-[55%] flex flex-col justify-center'>
        <div className='p-10'>
          <h2 className='text-lg font-bold'>Owen Barker</h2>
          <p className='font-semibold'>Customer service executive</p>
          <h1 className='text-4xl font-semibold my-6'>Barker@Thejobs.com</h1>
          <h3 className='text-3xl font-semibold'>+44(079) 3225 05-47</h3>
        </div>
        <div className='p-10'>
          <h2 className='text-lg font-bold'>Joe Benson</h2>
          <p className='font-semibold'>Marketing executive</p>
          <h1 className='text-4xl font-semibold my-6'>Benson@Thejobs.com</h1>
          <h3 className='text-3xl font-semibold'>+44(079) 3225 04-48</h3>
        </div>
        </div>

       </div>

     </div> 
    </>
  )
}

export default Contact
