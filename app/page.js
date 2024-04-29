"use client"

import { motion }from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Homepage = () => {
  const route = useRouter();
  return (
    <header className="w-screen h-screen flex justify-center items-center cursor-pointer">
      <motion.div initial={{ y: "-200%" }} animate={{ y: 0 }} transition={{ duration: 2, ease: "easeInOut" }} className="bg-gradient-to-r from-zinc-700 to-zinc-900 w-907 h-556 rounded-50 p-6 shadow-xl flex border-t-2 border-l-2 border-b-2 border-white" onClick={() => route.push('/home')}>
        <div className='w-2/5'>hi</div>
        <div className='w-3/5 flex justify-center'><Image src="/assets/Arbanhomelogo.svg" width={500} height={500} alt='homelogo' /></div>
      </motion.div>
    </header>
  )
}

export default Homepage;