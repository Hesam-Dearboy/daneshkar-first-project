import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Counter = ({endNum}) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const { ref, inView: isVisible } = useInView({
    threshold: 0.1, // Adjust threshold as needed
  });

  useEffect(() => {
    if (isVisible) {
      setInView(true);
    }
  }, [isVisible]);

  useEffect(() => {
    if (inView && count < endNum) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 10); // Adjust delay as needed

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [inView, count]);

  return (
    <div ref={ref}>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" text-white text-6xl"
      >
         {count}
      </motion.h1>
    </div>
  );
};

export default Counter;
