"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import style from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, ExploreCard, TitleText } from "../components";
import { exploreWorlds } from "../constants";
const Explore = () => (
  <section className={`${style.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${style.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| The World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Choose the world you want
            <br className=" md:block hidden" /> to explore
          </>
        }
        textStyles={"text-center"}
      />
    </motion.div>
  </section>
);

export default Explore;
