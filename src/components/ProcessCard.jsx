import React from 'react'

const ProcessCard = ({classname,Logo,title,children}) => {
  return (
    <>
     <div className={`{w-[27%] border-black/30 border-2 my-8 mx-8 rounded-3xl ${classname} bg-black`}>
         <div className='h-[100px] p-8 flex  items-center'>
            <div className='bg-[#F6E87B] p-4 rounded-full'>
            {Logo}
            </div>
         </div>
         <div className='px-8 text-xl font-bold text-white'>
            {title}
         </div>
         <p className='p-4 my-4 px-8 font-semibold text-white'>{children}</p>
      </div>
    </>
  )
}

export default ProcessCard
