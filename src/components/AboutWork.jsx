import React from 'react'
import Aboutcard from './Aboutcard'
import { ThumbsUp,Shirt,TicketCheckIcon } from 'lucide-react'

const AboutWork = () => {
  return (
    <>
      <div className='w-full my-8 p-8'>

        <h1 className='text-center text-4xl font-bold'>How We Work</h1>
        <p className='text-center font-bold mt-4'>We enable your project's success by finding the tech experts that best fit</p>
        <p className='text-center font-bold'>to your challange in short time and with personal assistance</p>

        <div className='flex justify-between'>
            <Aboutcard title='Precise Fit' Logo={<ThumbsUp />}>We Take Care Of Selecting The best Candidates That Fullly Satisfy The Demand Of Your Projects And Are A Great Personal Fit To Your Organisation And Tech Department's Culture</Aboutcard>

            <Aboutcard title='Easy & Fast' Logo={<TicketCheckIcon />} classname='bg-[#F6E87B]'>Our Fast Assessment Process Enables Your Organisation To Quickly Scale Your Tech Teams. Expedite Recruitment Processes And Focus On Delivering Results.</Aboutcard>

            <Aboutcard title='Assistance' Logo={<Shirt />}>An Expertlead Key Account Manager Will Assist You Throughout The Whole Project Life-Cycle To Ensure That You Get Most Of Your Collabration. </Aboutcard>
        </div>

      </div>
    </>
  )
}

export default AboutWork
