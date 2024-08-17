"use client";

import React from 'react'
import { ModeToggle } from './ThemeToggle';

const Navbar = () => {
  return (
    <div className='w-screen'>
        <div className='mx-auto w-[80%] mt-4 lg:w-[60%] p-3 dark:bg-zinc-800/40 border-[0.5px] dark:border-zinc-700/40 rounded-xl'>
            <div className='flex items-center justify-between px-2'>
                <h1 className='font-bold text-lg'>2One</h1>
                <div className='hidden md:flex text-sm justify-between dark:text-white w-3/5'>
                  <p className='border border-dashed border-transparent hover:border-rose-500 rounded-sm px-4 py-2 dark:hover:text-rose-500 cursor-pointer transition-all'>Portfolio</p>
                  <p className='border border-dashed border-transparent hover:border-rose-500 rounded-sm px-4 py-2 dark:hover:text-rose-500 cursor-pointer transition-colors'>Work with me</p>
                  <p className='border border-dashed border-transparent hover:border-rose-500 rounded-sm px-4 py-2 dark:hover:text-rose-500 cursor-pointer transition-colors'>Connect</p>
                </div>
                <div className='flex md:hidden items-center'>
                  Menu
                  <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 10 4 4 4-4"/>
                  </svg>
                </div>
                <ModeToggle />
            </div>
        </div>
    </div>
  )
}

export default Navbar