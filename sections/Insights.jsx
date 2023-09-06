'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText, InsightCard } from '../components';
import { staggerContainer } from '../utils/motion';
import { insights } from '../constants';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {/* Animation Container */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* TypingText */}
      <TypingText title="|Insight" textStyles="text-center" />

      {/* TitleText */}
      <TitleText title={<>Insight about metaverse</>} textStyles="text-center" />

      {/* Insight Cards */}
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...item}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;