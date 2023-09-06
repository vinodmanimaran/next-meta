"use client"

import { motion } from "framer-motion";
import { useState } from 'react';
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { exploreWorlds } from '../constants';
import { TitleText, TypingText } from "../components/CustomTexts";
import ExploreCard from "../components/ExploreCard";

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        {/* Section title */}
        <TypingText title="| The World" textStyles="text-center" />

        {/* Section description */}
        <TitleText title={<>Choose the world you want <br className="md:block hidden" /> to explore</>} textStyles="text-center" />

        {/* Explore cards */}
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
