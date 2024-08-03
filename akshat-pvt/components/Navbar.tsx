"use client";

import Image from 'next/image'
import React from 'react'
import logo from '@/assets/logo-dark.svg'
import { Button } from './ui/button'
import { ModeToggle } from './ThemeToggle';

const Navbar = () => {
  return (
    <div className='w-screen'>
        <div className='mx-auto w-[80%] mt-4 lg:w-[60%] p-3 dark:bg-zinc-800/40 border-[0.5px] dark:border-zinc-700/40 rounded-lg'>
            <div className='flex items-center justify-between px-2'>
                <Image src={logo} alt='Akshat' height={40}/>
                <div className='hidden md:flex text-sm justify-between dark:text-white w-3/5'>
                  <p className='border border-dashed border-transparent hover:border-rose-500 rounded-sm px-4 py-2 dark:hover:text-rose-500 cursor-pointer transition-all'>Portfolio</p>
                  <p className='border border-dashed border-transparent hover:border-rose-500 rounded-sm px-4 py-2 dark:hover:text-rose-500 cursor-pointer transition-colors'>Work with me</p>
                  <p className='border border-dashed border-transparent hover:border-rose-500 rounded-sm px-4 py-2 dark:hover:text-rose-500 cursor-pointer transition-colors'>Connect</p>
                </div>
                <ModeToggle />
            </div>
        </div>
    </div>
  )
}

export default Navbar