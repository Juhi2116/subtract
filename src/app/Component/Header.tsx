import React from 'react'

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { NavigationMenuDemo } from './Nav';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-n border-gray-200 voilet/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center  border-b border-zinc-200'>
          <Link
            href="/"
            className='flex z-40 font-semibold text-white-600 p-6'
          >
            <Image
              src="/logo.png"
              alt="product preview"
              width={180}
              height={10}
              quality={100}
            />          </Link>
          <div className='flex ml-11'>
          <Link
              href="/About"
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm'

              })}>About
                        </Link>

                        {/* <Link
              href="/Contact us"
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm'

              })}>Product
                        </Link> */}
                        <NavigationMenuDemo/>

          </div>
          {/* add mobile navbar */}
          <div className='hidden items-center space-x-4 sm:flex '>
            <></>
          </div>
          {/* "Get started" button wrapped in ml-auto div */}
          <div className="ml-auto">
          <Link
          className={buttonVariants({
            size: "lg",
          className: "p-2 bg-gradient-to-r from-purple-800 to-purple-400 text-white hover:bg-purple-600  text-xl border border-white rounded-lg  hidden sm:inline-block text-center",
        })}
          href="/dashboard"
          target="_blank"
        >
          Get started 
        </Link>
          </div>
        </div>
      </MaxWidthWrapper>
      {/* <>time 2:06</> */}
    </nav>
  )
}

export default Navbar;
