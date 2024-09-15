import React from 'react'
import PlanCard from '../PlanCard'

const Services = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-semibold dark:text-rose-600 py-8'>Our Services</h1>
        <div className='flex justify-evenly w-full my-8'>
            <PlanCard />
            <PlanCard />
            <PlanCard />
        </div>
    </div>
  )
}

export default Services