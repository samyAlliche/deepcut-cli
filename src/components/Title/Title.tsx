"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Title = () => {
  return (
    <div className="relative w-60 h-auto">
      <motion.div
        className="absolute top-0 left-0"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 30, mass: 1 }}
      >
        <Image
          priority
          src="/logo1.svg"
          alt="Disc Logo"
          width={100}
          height={100}
        />
      </motion.div>
      <motion.div
        className="absolute top-7 left-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 50,
          mass: 2,
          delay: 0.5,
        }}
        whileHover={{ x: 5, transition: { duration: 0.2 } }}
      >
        <Image
          priority
          src="/logo2.svg"
          alt="Text Logo"
          width={200}
          height={200}
        />
      </motion.div>
    </div>
  );
};

export default Title;
