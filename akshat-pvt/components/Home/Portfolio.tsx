"use client";

import { useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ScreenFitText } from '../FitText';

const Portfolio = () => {
  return (
    <div>
      <div className='flex h-72 items-center justify-center'>
        <h1 className='text-3xl font-semibold dark:text-rose-600'>Our Portfolio</h1>
      </div>
      <HorizontalScrollCarousel />
      <div>
        <ScreenFitText />
      </div>
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
    <div ref={targetRef} className='relative h-[300vh] bg-slate-100 dark:bg-white/5'>
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
      className="group relative h-[380px] w-[350px] md:h-[380px] md:w-[600px] overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center md:place-content-end">
        <p className="bg-gradient-to-br from-black/30 to-black/90 px-8 py-6 m-2 rounded-md text-2xl md:text-4xl font-black uppercase text-white backdrop-blur-lg outline-2 outline-dashed outline-rose-600">
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
    url: '/images/landing.png',
    title: "Landing Pages",
    id: 1,
  },
  {
    url: "/images/tools.png",
    title: "Tools",
    id: 2,
  },
  {
    url: "/images/blogging.png",
    title: "Blogs",
    id: 3,
  },
  {
    url: "/images/ecommerce.png",
    title: "Ecommerce",
    id: 4,
  },
  {
    url: "/images/inventory.png",
    title: "Inventory",
    id: 5,
  },
  {
    url: "/images/social.png",
    title: "Social Platforms",
    id: 6,
  },
  {
    url: "/images/rental.png",
    title: "Catalogues",
    id: 7,
  },
];