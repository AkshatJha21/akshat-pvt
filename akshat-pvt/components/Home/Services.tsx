import React from 'react'
import PlanCard from '../PlanCard'

const Services = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-semibold dark:text-rose-600 py-8'>Our Services</h1>
        <div className='flex justify-evenly w-full my-8'>
            <PlanCard
                title='Basic'
                tag='Individual'
                desc='Landing pages & Portfolios'
                offers={[
                    {
                        id: 1,
                        offer: 'Responsive Design',
                        icon: true
                    },
                    {
                        id: 2,
                        offer: 'Delivery in 48 hrs',
                        icon: true
                    },
                    {
                        id: 3,
                        offer: 'Multiple revisions',
                        icon: false
                    },
                    {
                        id: 4,
                        offer: 'Search Engine Optimized',
                        icon: false
                    },
                ]}
                price={3999}
                model='per web page'
            />
            <PlanCard
                title='Value'
                tag='Company'
                desc='Blogs, Ecommerce, Social & Tools'
                offers={[
                    {
                        id: 1,
                        offer: 'Multiple revisions',
                        icon: true
                    },
                    {
                        id: 2,
                        offer: 'Search Engine Optimized',
                        icon: true
                    },
                    {
                        id: 3,
                        offer: 'Regular check-ins',
                        icon: true
                    },
                    {
                        id: 4,
                        offer: 'Management after deploying',
                        icon: false
                    },
                ]}
                price={9999}
                model='per month'
            />
            <PlanCard
                title='Premium'
                tag='Company'
                desc='Develop, Deploy & Manage'
                offers={[
                    {
                        id: 1,
                        offer: 'Management after deploying',
                        icon: true
                    },
                    {
                        id: 2,
                        offer: 'Any time revision',
                        icon: true
                    },
                    {
                        id: 3,
                        offer: '24x7 support',
                        icon: true
                    },
                    {
                        id: 4,
                        offer: 'Regular bug fixes',
                        icon: true
                    },
                ]}
                price={14999}
                model='subscription'
            />
        </div>
    </div>
  )
}

export default Services