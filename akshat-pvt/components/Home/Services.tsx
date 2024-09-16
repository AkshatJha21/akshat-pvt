import React from 'react'
import PlanCard from '../PlanCard'

const Services = () => {
  return (
    <div className='lg:h-screen flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-semibold dark:text-rose-600 py-8'>Our Services</h1>
        <div className='flex lg:flex-row flex-col justify-evenly w-full my-8 gap-y-12'>
            <PlanCard
                title='Basic'
                tag='Individual'
                desc='Landing pages & Portfolios'
                offers={[
                    {
                        id: 1,
                        offer: 'Responsive design',
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
                        offer: 'SEO',
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
                        offer: 'SEO',
                        icon: true
                    },
                    {
                        id: 3,
                        offer: 'Regular check-ins',
                        icon: true
                    },
                    {
                        id: 4,
                        offer: 'Deployed & managed',
                        icon: false
                    },
                ]}
                price={9999}
                model='per month'
            />
            <PlanCard
                title='Premium'
                tag='Company'
                desc='Design, Develop, Deploy & Manage'
                offers={[
                    {
                        id: 1,
                        offer: 'Deployed & managed',
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