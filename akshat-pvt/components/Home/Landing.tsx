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
          
    </div>
  )
}

export default Landing