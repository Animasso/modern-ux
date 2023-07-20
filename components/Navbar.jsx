"use client";
import { motion } from "framer-motion";
import style from "../styles";
import { navVariants } from "../utils/motion";
const Navbar = () => (
  <motion.nav
    className={`${style.paddings} py-8 relative`}
    variants={navVariants}
    initial="hidden"
    whileInView="show"
  >
    <div className=" absolute w-[50%] inset-0 gradient-01 " />
    <div className={`${style.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/search.svg"
        alt="search image"
        className=" w-[24px] h-[24px] object-contain cursor-pointer"
      />
      <h2 className=" font-extrabold text-[24px] leading-[30px] text-white ">
        ASIDUNIVERS
      </h2>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
