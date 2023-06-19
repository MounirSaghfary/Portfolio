import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);
const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink
        href="/"
        className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold'
        whileHover={{
          backgroundColor: [
            '#121212',
            '#1f2937',
            '#64748b',
            '#0891b2',
            '#14b8a6',
            '#a78bfa',
            '#fbcfe8',
            '#f8fafc',
            '#e5e7eb',
            '#121212'
          ],
          transition: { duration: 1, repeat: Infinity }
        }}
      >
        MS
      </MotionLink>
    </div>
  );
};

export default Logo;
