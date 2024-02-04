import React from 'react'
import {ThumbsUp} from 'lucide-react'

const Aboutcard = ({classname,children,title,Logo}) => {
  return (
    <>
      <div className={`{w-[27%] border-black/30 border-2 my-8 mx-8 rounded-lg ${classname}`}>
         <div className='h-[100px] p-4 flex justify-center items-center'>
            <div className='bg-[#421363] p-4 rounded-full text-white'>
            {Logo}
            </div>
         </div>
         <div className='text-center text-xl font-bold'>
            {title}
         </div>
         <p className='p-4 my-4 text-center font-semibold'>{children}</p>
      </div>
    </>
  )
}

export default Aboutcard
