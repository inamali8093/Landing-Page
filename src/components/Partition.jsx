import React from 'react'

const Partition = () => {
  return (
    <>
      <div className='w-full bg-black text-white mt-36'>
         <div className='grid grid-cols-4 p-8'>
            <div className='flex border-r-2 p-2 flex-col justify-center items-center text-2xl font-bold'>
            <p>People Productivity</p>
            <p>Performance</p>
            </div>
        

            <div className='flex  flex-col justify-center border-r-2 items-center'>
                <h2>JOBS</h2>
                <span className='text-2xl font-bold'>+235K</span>
            </div>

            <div className='flex flex-col justify-center border-r-2 items-center'>
                <h2>STARTUPS</h2>
                <span className='text-2xl font-bold'>+60K</span>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h2>TALENT</h2>
                <span className='text-2xl font-bold'>+678K</span>
            </div>

         </div>
      </div>
    </>
  )
}

export default Partition
