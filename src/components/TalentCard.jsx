import { Star } from 'lucide-react'
import React from 'react'

const TalentCard = ({imgSrc,name,designation,rating,reviews}) => {
  return (
    <>
      <div className='flex w-[22%] flex-col my-8'>
        <div className='w-full rounded-lg overflow-hidden'>
            <img src={imgSrc} alt="" />
        </div>
        <h2 className='font-bold text-center'>{name}</h2>
        <h4 className='font-semibold text-center'>{designation}</h4>
        <hr />
        <div className='flex gap-2 justify-center'>
        <Star color='' fill='yellow'/>
        <span>{rating}/5.0({reviews} reviews)</span>
        </div>
      </div>
    </>
  )
}

export default TalentCard
