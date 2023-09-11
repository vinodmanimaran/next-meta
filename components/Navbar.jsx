'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import next/image before ../styles
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-1/2 inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <Image src="/search.svg" alt="search" className="object-contain" width={24} height={24} />
      <h2 className="font-extrabold text-24px leading-30.24px text-white">METAVERSUS</h2>
      <Image src="/menu.svg" alt="menu" className="object-contain" width={24} height={24} />
    </div>
  </motion.nav>
);

export default Navbar;
