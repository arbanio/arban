"use client"

import { motion }from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Homepage = () => {
  const route = useRouter();
  return (
    <header className="w-screen h-screen flex justify-center items-center cursor-pointer">
      <motion.div initial={{ y: "-200%" }} animate={{ y: 0 }} transition={{ duration: 2, ease: "easeInOut" }} className="w-[900px] h-[500px] rounded-50 p-6 shadow-xl flex homecarddiv" onClick={() => route.push('/home')}>
        <div className='w-2/5 flex justify-center'><Image src={"/assets/seahorse.svg"} width={500} height={500} /></div>
        <div className='w-3/5 flex justify-center'><Image src="/assets/Arbanhomelogo.svg" width={500} height={500} alt='homelogo' /></div>
      </motion.div>
    </header>
  )
}

export default Homepage;