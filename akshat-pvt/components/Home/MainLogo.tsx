"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DottedButton from '../DottedButton';

const MainLogo = () => {
  const text = '2One';
  const str = "21 Devs: Your all-in-one digital solution, delivering top-notch design and development — fast and on time.";
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 2000); // Total duration of the loading animation (dots appear twice)

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {loading && (
        <div className="inline-flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="inline-block text-7xl dark:text-rose-600"
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                repeat: 1,
                duration: 0.6,
                delay: i * 0.2,
              }}
            >
              .
            </motion.span>
          ))}
        </div>
      )}

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="text-[42px] md:text-6xl cursor-default font-semibold dark:text-rose-600">
            {text.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              className="inline-block"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1, delay: text.length * 0.1 }}
            >
              _
            </motion.span>
          </div>
          <div
            className='my-12 flex md:flex-row gap-y-8 flex-col md:w-[60%] items-center justify-evenly'
          >
            <p className='md:text-lg text-pretty md:text-balance md:w-3/5 w-4/5'>
              {str}
            </p>
            <DottedButton />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MainLogo;
