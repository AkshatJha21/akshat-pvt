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
                        offer: 'Responsive Design',
                        icon: true
                    },
                    {
                        offer: 'Delivery in 48 hrs',
                        icon: true
                    },
                    {
                        offer: 'Multiple revisions',
                        icon: false
                    },
                    {
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
                        offer: 'Multiple revisions',
                        icon: true
                    },
                    {
                        offer: 'Search Engine Optimized',
                        icon: true
                    },
                    {
                        offer: 'Regular check-ins',
                        icon: true
                    },
                    {
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
                        offer: 'Management after deploying',
                        icon: true
                    },
                    {
                        offer: '24x7 support',
                        icon: true
                    },
                    {
                        offer: 'Regular bug fixes',
                        icon: true
                    },
                    {
                        offer: '',
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