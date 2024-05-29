import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
type Props = {}

const Navbar = async (props: Props) => {
  return (
    <header className='fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 blackdrop-blur-lg
     z-[100] flex item-center border-b-[1px] border-neutral-900 justify-between'>
            <Image 
            src= "/Logo.svg" 
            width={90} 
            height={90} 
            alt='glee logo'
            className='shadow-sm'/>
   
    <nav className='absolute left-[50%] right-[50%] transform translate-x-[50%] translate-y-[50%]
    hidden md:block'>
        <ul className='flex items-center gap-4 list-none text-sm text-neutral-400'>
            <li>
                <Link href='#'> Home </Link>
            </li>
            <li>
                <Link href='#'> Pricing </Link>
            </li>
            <li>
                <Link href='#'> Client </Link>
            </li>
            <li>
                <Link href='#'> Documentation</Link>
            </li>
        </ul>
    </nav>
    </header>
  )
}
export default Navbar