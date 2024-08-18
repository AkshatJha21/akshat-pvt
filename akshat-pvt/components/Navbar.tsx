"use client";

import React, { useEffect, useRef, useState } from 'react'
import { ModeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

    const handleDropdown = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          dropdownRef.current && 
          !dropdownRef.current.contains(e.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(e.target as Node)
        ) {
          setMenuOpen(false);
        };
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [dropdownRef]);
  return (
    <div className='w-screen'>
        <div className='relative mx-auto w-[80%] mt-4 lg:w-[60%] p-3 dark:bg-zinc-800/40 border-[0.5px] dark:border-zinc-700/40 rounded-xl'>
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
                <div ref={buttonRef} className={`flex md:hidden items-center px-4 py-2 rounded-md ${menuOpen ? 'bg-slate-100 dark:bg-stone-800' : ''}`} onClick={handleDropdown}>
                  Menu
                  <svg className={`w-5 h-5 ml-2 text-gray-800 dark:text-white ${menuOpen ? '-rotate-180 duration-250 transition-all' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 10 4 4 4-4"/>
                  </svg>
                </div>
                <ModeToggle />
            </div>
            <div className='md:hidden' ref={dropdownRef}>
              <AnimatePresence>
                {menuOpen && (
                  <DropdownMenu />
                )}
              </AnimatePresence>
            </div>
        </div>
    </div>
  )
}

const DropdownMenu = () => {
  return (
    <motion.div 
      className='absolute mt-4 left-0 right-0 top-full z-50'
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
    >
            <div className='shadow-md flex flex-col border border-dashed border-rose-500 p-2 rounded-lg text-black dark:text-white bg-white dark:bg-stone-950'>
                <div className='px-2 py-2'>
                    Portfolio
                </div>
                <div className='px-2 py-2'>
                    Services
                </div>
                <div className='px-2 py-2'>
                    Connect
                </div>
            </div>
        </motion.div>
  )
}

export default Navbar