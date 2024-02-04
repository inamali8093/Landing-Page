import React from 'react'
import ProcessCard from './ProcessCard'
import { MessageSquare,PanelsTopBottom,Star } from 'lucide-react'

const Process = () => {
  return (
    <>
     <div className='w-full mt-8 px-12'>

       <div>
        <h1 className='text-4xl  font-bold text-center'>A Simple Process</h1>
        <p className='mt-4 font-semibold text-center'>We believe that every project is unique. Our technology helps to precisely</p>
        <p className='font-semibold text-center'>assess and recommend the right candidate for your project.</p>
       </div>

       <div className='grid grid-cols-3'>
         <ProcessCard
          title='Tell Us What You Need'
          Logo={<MessageSquare />}
          >We Collect Your Input Online. Followed By A Short Follow-Up Call. This Gives Us A Comprehensive Overview Of Your Skill Requirement</ProcessCard>
         <ProcessCard
          title='We Assess Candidates'
          Logo={<PanelsTopBottom />}
          >We Leverage Technology To Find And Assess Tech Talents That Are A Precise Fit To Your Needs - Be It From Within Or Even Outside Of Our Community</ProcessCard>
         <ProcessCard
         title='Receive Our Recommendation'
         Logo={<Star />}
         >We Finally Share With You A Comprehensive Report Explaining Each Candidate's Background And Expertise</ProcessCard>
       </div>

    </div> 
    </>
  )
}

export default Process
