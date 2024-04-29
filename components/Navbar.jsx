"use client"

import { NavbarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
   <header className='w-full h-20 p-4 bg-black-2'>
    <div className='flex justify-between items-center'>
        <div className='w-full flex justify-center xl:w-40 ml-6'><Image src={"/assets/logo.svg"} className='cursor-pointer' onClick={() => router.push("/home")} width={150} height={100}/></div>
        <div className='hidden w-[40rem] xl:flex justify-between mr-8'>
            {NavbarLinks.map((link) => {
                const isActive = pathname === link.route;
                return(
                    <Link className={`cursor-pointer text-white hover:text-gold-1 ${isActive ? 'text-gold-1' : 'text-white'}`} key={link.label} href={link.route}>{link.label}</Link>
                )
            })}
        </div>
    </div>
   </header>
  )
}

export default Navbar;