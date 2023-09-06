"use client"

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion.js';

const About = () => (
  // About section
  <section className={`${styles.paddings} relative z-10`}>
    {/* Gradient background */}
    <div className="gradient-02 z-0" />

    {/* Content container */}
    <motion.div
      // Animation settings
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      {/* Section title */}
      <TypingText title="| About Metaversus" textStyles="text-center" />

      {/* Section description */}
      <motion.p
        // Text animation settings
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverse</span> is a new
        concept of the future, where you can immerse yourself in a virtual world
        that feels incredibly real. In this metaverse, you can experience
        sensations just as you would in the physical world. It's the{' '}
        <span className="font-extrabold text-white">madness of the metaverse</span>{' '}
        today. With the use of{' '}
        <span className="font-extrabold text-white">VR</span> devices, you can
        easily explore the metaverse and turn your dreams into reality. Let's{' '}
        <span className="font-extrabold text-white">explore</span> the madness of
        the metaverse by scrolling down.
      </motion.p>

      {/* Arrow-down icon */}
      <motion.img
        // Arrow animation settings
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
