"use client";

import { useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    // <div className='h-screen flex justify-center items-center'>
    //     <h1 className='text-3xl font-semibold text-rose-600'>Our Portfolio</h1>
    //     <HorizontalScrollCarousel />
    // </div>
    <div>
      <div className='flex h-96 items-center justify-center'>
        <h1 className='text-3xl font-semibold text-rose-600'>Our Portfolio</h1>
      </div>
      <HorizontalScrollCarousel />
      {/* <div className='flex h-48 items-center justify-center'>
        <h1 className='text-3xl font-semibold text-rose-600'>Our Portfolio</h1>
      </div> */}
    </div>
  )
}

export default Portfolio

const HorizontalScrollCarousel = () => {

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div ref={targetRef} className='relative h-[300vh]'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </div>
  )
}

const Card = ({ card }: { card: CardType }) => {
  return (
    <div 
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  )
}

type CardType = {
  url: string;
  title: string;
  id: number;
}

const cards: CardType[] = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];