import { NavbarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <main>
      <section>
        <Sheet>
          <SheetTrigger asChild>
            <Image
              src="/icons/hamburger.svg"
              alt="menu-icon"
              width={36}
              height={36}
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent side={"left"} className="bg-black-2 border-none">
            <div className="h-full flex flex-col justify-between items-center overflow-y-auto">
              <SheetClose asChild>
                <section className="flex h-full flex-col gap-8 pt-16 text-slate">
                  {NavbarLinks.map((link) => {
                    const isActive = pathname === link.route;

                    return (
                      <SheetClose asChild key={link.route}>
                        <Link
                          href={link.route}
                          key={link.label}
                          className={`flex gap-8 items-center w-full max-w-60 text-3xl font-semibold hover:text-white ${isActive ? 'text-gold-1': "text-white78-"}`}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </section>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </section>
    </main>
  )
}

export default MobileNav;