import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen'>
        <div className='mx-auto w-[80%] mt-4 lg:w-[60%] p-3 bg-zinc-800 rounded-lg'>
            <div className='flex items-center justify-between px-2'>
                <p>Logo</p>
                <p className='text-sm'>Portfolio</p>
                <p className='text-sm'>Pricing</p>
                <p className='text-sm'>Contact</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar