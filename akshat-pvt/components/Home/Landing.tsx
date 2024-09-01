"use client";

import React, { useState } from 'react'
import MainLogo from './MainLogo';
import DottedButton from '../DottedButton';
import { motion } from 'framer-motion';

const Landing = () => {
  const str = "21 Devs: Your all-in-one digital solution, delivering top-notch design and development — fast and on time.";
  

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
        <MainLogo />  
          {/* Subheading div below */}
        
          <div
            className='py-4 md:py-8 flex md:flex-row gap-y-4 flex-col md:w-[50%] items-center justify-center'
          >
            <p className='md:text-[16px] text-pretty md:text-balance md:w-3/5 w-4/5'>
              {str}
            </p>
            <DottedButton />
          </div>
    </div>
  )
}

export default Landing