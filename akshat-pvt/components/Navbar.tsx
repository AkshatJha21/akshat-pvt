"use client";

import React from 'react'
import { ModeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
  return (
    <div className='w-screen'>
        <div className='mx-auto w-[80%] mt-4 lg:w-[60%] p-3 dark:bg-zinc-800/40 border-[0.5px] dark:border-zinc-700/40 rounded-xl'>
            <div className='flex items-center justify-between px-2'>
                <h1 className='font-bold text-lg'>2One</h1>
                <div className='hidden md:flex text-sm justify-between dark:text-white w-3/5'>
                  <Button variant={'dotted'}>
                    Portfolio
                  </Button>
                  <Button variant={'dotted'}>
                    Services
                  </Button>
                  <Button variant={'dotted'}>
                    Connect
                  </Button>
                </div>
                <div className='flex md:hidden items-center'>
                  <HamburgerMenu />
                  
                </div>
                <ModeToggle />
            </div>
        </div>
    </div>
  )
}

export default Navbar