'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    {/* Animation Container */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      {/* Left Content */}
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        {/* Feedback Gradient */}
        <div className="feedback-gradient" />

        {/* Feedback Info */}
        <div>
          <h4 className="font-bold text-[26px] sm:text-[32px] leading-[36.32px] sm:leading-[40.32px] text-white">
            Vinod Kumar
          </h4>
          <p className="mt-[8px] font-normal text-[12px] sm:text-[18px] leading-[16.68px] sm:leading-[22.68px] text-white">
            Founder
          </p>
        </div>

        {/* Feedback Text */}
        <p className="mt-[24px] font-normal text-[18px] sm:text-[24px] leading-[39.6px] sm:leading-[45.6px] text-white">
          "With the development of today's technology, metaverse is very
          useful for today's work, or can be called web 3.0. By using
          metaverse, you can use it for anything."
        </p>
      </motion.div>

      {/* Right Content */}
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        {/* Image */}
        <img
          src="/planet-09.png"
          alt="planet-09"
          className="w-full h-auto lg:h-[610px] min-h-[210px] object-cover rounded-[40px]"
        />

        {/* Zoomed-in Stamp */}
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
