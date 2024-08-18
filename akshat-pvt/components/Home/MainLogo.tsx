"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MainLogo = () => {
  const text = '2One';
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <div className="text-6xl cursor-default font-semibold dark:text-rose-600">
        {showText && (
          <motion.div
            className="inline-flex"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {text.split('').map((char, index) => (
              <motion.span key={index} variants={child}>
                {char}
              </motion.span>
            ))}
          </motion.div>
        )}
      <motion.span
        className="inline-block"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        _
      </motion.span>
    </div>
  );
};

export default MainLogo;
