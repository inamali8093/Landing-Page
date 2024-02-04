import React from 'react'
import TalentCard from './TalentCard'

const Talent = () => {
  return (
    <>
      <div className='w-full px-14'>
        <h1 className='text-4xl font-bold'>Meet Talent in Our Network</h1>
        <p className='font-semibold mt-4'>Access a strong community of over 20,000 vetted tech freelancers</p>

        <div className='flex gap-6 justify-between'>
        <TalentCard
        imgSrc='./man1.jpg'
         name='Cameron Williamson'
         designation='Senior Software Developer'
         rating='4.8'
         reviews='345'
         />
        <TalentCard
        imgSrc='./man2.jpg'
         name='Darrell Steward'
         designation='Senior ML/AI Engineer'
         rating='4.4'
         reviews='125'
         />
        <TalentCard
        imgSrc='./man5.jpg'
         name='Bessie Cooper'
         designation='UI/UX Designer'
         rating='4.6'
         reviews='235'
         />
        <TalentCard
        imgSrc='./man4.jpg'
         name='Jerome Bell'
         designation='Senior Front-End Developer'
         rating='4.2'
         reviews='235'
         />
      </div>
      </div>

      
    </>
  )
}

export default Talent
