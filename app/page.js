"use client"

import { motion }from 'framer-motion';
import { useRouter } from 'next/navigation';

const Homepage = () => {
  const route = useRouter();
  return (
    <header className="w-screen h-screen flex justify-center items-center cursor-pointer">
      <motion.div initial={{ y: "-200%" }} animate={{ y: 0 }} transition={{ duration: 2, ease: "easeInOut" }} className="w-[362px] h-[210px] md:w-[900px] md:h-[500px] md:rounded-50 p-6 shadow-xl flex" onClick={() => route.push('/home')}>
        <div className=' w-2/5 p-3 flex justify-center overflow-hidden relative items-center box'></div>
        <div className='w-3/5 p-3 flex items-center justify-center'><img src='/assets/Arbanhomelogo.svg' /></div>
      </motion.div>
    </header>
  )
}

export default Homepage;