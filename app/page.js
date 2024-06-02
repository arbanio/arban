"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const route = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        route.push('/home');
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [route]);

  return (
    <header className="w-screen h-screen flex justify-center items-center cursor-pointer">
      <motion.div
        initial={{ y: "-200%" }}
        animate={{ y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="flex justify-center p-6 "
        onClick={() => route.push("/home")}
      >
        <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="justify-center overflow-hidden relative items-center">
          <Image src="/assets/Seahome.png" alt="sea-horse" width={260} height={260} />
        </motion.div>
        {/* <div className='w-3/5 p-3 flex items-center justify-center'><img src='/assets/Arbanhomelogo.svg' /></div> */}
      </motion.div>
    </header>
  );
};

export default Homepage;
