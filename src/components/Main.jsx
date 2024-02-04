import React from 'react'
import { Star,StarHalfIcon,TriangleIcon,CodeSquare,PenTool } from 'lucide-react'

const Main = () => {
  return (
    <>
      <div className='w-full p-6 font-medium flex bg-[#F4F3E1]'>
        {/* left side */}
        <div className='w-[45%] px-14'>
            <div className='text-8xl flex flex-col font-bold mb-4 gap-5'>
                <p>Hire Expert</p>
                <p>For <span className='text-[#6543BE] italic'>Future</span></p>
            </div>
            <p className='mt-14'>We Understand That For You, It's Never Just A Job. It's Your Business. That's Why We're Passionate About Not Only Finding You A Quality Employee, But Also The Perfact Fit.</p>
            <button className='text-white bg-[#421363] p-2 rounded-lg hover:cursor-pointer px-6 my-8'>
                Get Started
            </button>
            {/* Rating */}
            <div className='flex items-center'>
                <span>4.9</span>
                <Star fill='yellow' color='' size={40} />
                <Star fill='yellow' color='' size={40}/>
                <Star fill='yellow' color='' size={40}/>
                <Star fill='yellow' color='' size={40}/>
                <StarHalfIcon fill='yellow' color='' size={40}/>
                <span>576K+ Ratings</span>
            </div>
        </div>

        {/* right side */}
         <div className='w-[55%] flex justify-center items-center relative'>
          
           <div className='rounded-xl h-[400px] z-0 w-[360px] bottom-0 bg-black absolute'></div>
            <img src="./man.png" alt=""  className=' z-10 bottom-0 absolute'/>
            

            <div className='absolute z-20 -bottom-3 right-[60%] bg-white rounded-lg overflow-hidden p-2'>
                <div className='flex items-center'>
               <h2 className='text-xl font-bold w-[200px] p-1'>Jobs</h2>
               <TriangleIcon fill='black' size={12} className='rotate-180 mr-2' />
              
               </div>
               <hr className='h-1 bg-black/30'/>
               <div className='flex p-2 items-center'>
                <div className='bg-[#F4F3E1] p-2 rounded-full'>
                  <CodeSquare />
                </div>
                <div className='ml-3'>
                    <p className='font-extrabold text-lg'>60%</p>
                    <span className='text-sm font-semibold'>Creative Developers</span>
                </div>
               </div>
               <div className='flex p-2 items-center'>
                <div className='bg-[#F4F3E1] p-2 rounded-full'>
                  <PenTool />
                </div>
                <div className='ml-3'>
                    <p className='font-extrabold text-lg'>40%</p>
                    <span className='text-sm font-semibold'>Creative Designers</span>
                </div>
               </div>
            </div>

            <div className='absolute z-20 top-[75%] left-[50%] bg-white rounded-lg overflow-hidden p-2'>
                <div className='flex items-center'>
               <h2 className='text-xl font-bold w-[200px] p-1'>Our Growth</h2>
               <TriangleIcon fill='black' size={12} className='rotate-180 mr-2' />
               </div>
               <hr className='h-1 bg-black/30'/>
               
               <div className='flex gap-2 my-2 rotate-180'>
                 <div className='flex flex-col items-center'>
                  <div className='w-[40px] rounded h-[110px] bg-[#F4F3E1]'></div>
                  <span className='rotate-180'>S</span>
                  </div>
                 <div className='flex flex-col items-center'>
                  <div className='w-[40px] rounded h-[80px] bg-[#F4F3E1]'></div>
                  <span className='rotate-180'>F</span>
                  </div>
                 <div className='flex flex-col items-center'>
                  <div className='w-[40px] rounded h-[120px] bg-[#F4F3E1]'></div>
                  <span className='rotate-180'>T</span>
                  </div>
                 <div className='flex flex-col items-center'>
                  <div className='w-[40px] rounded h-[100px] bg-[#F4F3E1]'></div>
                  <span className='rotate-180'>W</span>
                  </div>
                 <div className='flex flex-col items-center'>
                  <div className='w-[40px] rounded h-[140px] bg-[#F6E87B]'></div>
                  <span className='rotate-180'>T</span>
                  </div>
                 <div className='flex flex-col items-center'>
                  <div className='w-[40px] rounded h-[100px] bg-[#F4F3E1]'></div>
                  <span className='rotate-180'>M</span>
                  </div>
                 <div className='flex flex-col items-center'>
                  <div className='w-[40px] rounded h-[60px] bg-[#F4F3E1]'></div>
                  <span className='rotate-180'>S</span>
                  </div>
               </div>
              
            </div>
           
           

         </div>

      </div>
    </>
  )
}

export default Main
