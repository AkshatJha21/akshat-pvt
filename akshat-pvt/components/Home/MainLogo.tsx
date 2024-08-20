"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MainLogo = () => {
  const text = '2One';
  const [showText, setShowText] = useState(false);
  const [showUnderscore, setShowUnderscore] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
      setShowUnderscore(false);
      setShowText(true);
    }, 2000); // Total duration of the loading animation (dots appear twice)

    const finalUnderscoreTimer = setTimeout(() => {
      setShowUnderscore(true);
    }, 3000); // Time before the underscore starts flickering

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(finalUnderscoreTimer);
    };
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
      {loading && (
        <div className="inline-flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="inline-block text-7xl"
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
      {showUnderscore && (
        <motion.span
          className="inline-block"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          _
        </motion.span>
      )}
    </div>
  );
};

export default MainLogo;
