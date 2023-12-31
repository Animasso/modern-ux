"use client";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={slideIn("right", "spring", index * 0.5, 3)}
    className=" flex md:flex-row flex-col gap-4 "
  >
    <img
      src={imgUrl}
      alt="planet"
      className=" md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className=" w-full flex jus items-center">
      <div className=" flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className=" font-normal lg:text-[42px] text-[26px] text-white">
          {" "}
          {title}
        </h4>
        <p className=" mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}{" "}
        </p>
      </div>
      <div className=" lg:flex hidden w-[100px]  h-[100px] border rounded-full items-center justify-center border-white">
        {" "}
        <img
          src="/arrow.svg"
          alt="arrow"
          className=" w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
