import React from 'react'

type Offer = {
    id: number;
    icon: boolean;
    offer: string;
}

interface CardProps {
    title: string;
    tag: string;
    desc: string;
    offers: Offer[];
    price: number;
    model: string; 
}

const PlanCard = ({ title, tag, desc, offers, price, model }: CardProps) => {
  return (
    <div className='h-[450px] w-[25%] border-2 rounded-xl border-dashed border-rose-500 bg-slate-100 dark:bg-zinc-950 px-8 py-4 text-black dark:text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#f43f5d] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>
        <div className='flex flex-col'>
            <div className='py-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-semibold text-2xl uppercase '>{title}</h1>
                    <p className='text-xs uppercase bg-slate-300 dark:bg-stone-300 dark:text-black px-2 py-1 rounded-sm'>{tag}</p>
                </div>
                <p className='text-sm mt-2'>{desc}</p>
            </div>
            <div className='flex flex-col gap-y-4 py-4'>
                {offers.map((off) => 
                    <div className='flex items-center' key={off.id}>
                        {off.icon ? (
                            <svg className="mr-2 w-5 h-5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd"/>
                            </svg>
                        ) : (
                            <svg className="mr-2 w-5 h-5 text-rose-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clipRule="evenodd"/>
                            </svg>
                        )}
                        <p>{off.offer}</p>
                    </div>
                )}
            </div>
            <div className='flex items-baseline py-4'>
                <h1 className='text-3xl font-semibold'>₹ {price}</h1>
                <p className='ml-2'>{model}</p>
            </div>
        </div>
        <div className='my-4 w-full hover:opacity-80 transition-all uppercase cursor-pointer'>
            <h1 className='px-4 py-4 text-center bg-stone-800 rounded-md text-white'>Learn more</h1>
        </div>
    </div>
  )
}

export default PlanCard