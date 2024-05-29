import React from 'react'
import Image from 'next/image'
type Props = {}

const Navbar = async (props: Props) => {
  return (
    <header className='fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 blackdrop-blur-lg
     z-[100] flex item-center border-b-[1px] border-neutral-900 justify-between'>
            <Image src= "/Logo.svg" width={70} height={70} alt='glee logo' className='shadow-sm'/>
        
    </header>
  )
}
export default Navbar