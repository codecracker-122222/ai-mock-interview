import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'
const page = () => {
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className='text-lg'>Pratice with AI-powered mock interviews and receive personalized feedback.</p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interviews">Start Practicing</Link>
          </Button>
        </div>
        <img src="/robot.png" alt="AI Robot" width={400} height={400} className='max-sm:hidden'/>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>
        <div className='interview-section'>
         {dummyInterviews.map((interview)=>(<InterviewCard {...interview} key={interview}/>))}
        </div>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview.</h2>
        <div className='interview-section'>
           {dummyInterviews.map((interview)=>(<InterviewCard {...interview} key={interview}/>))}
           <p>You haven't taken any interviews yet.</p>
        </div>
      </section>
    </>
  )
}

export default page
