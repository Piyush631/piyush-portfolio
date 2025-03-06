"use client"

import { TypeAnimation } from 'react-type-animation';
export default function Speech(){
    return (
    <div className='flex justify-center gap-2  items-end lg:w-96 md:w-80 '>
        <div className=' h-20 bg-white dark:text-black dark:bg-neutral-500 px-3 rounded-t-2xl rounded-l-2xl  py-4 w-full   text-[18px]'>
        <TypeAnimation
      sequence={[
      
        'I desgin  beautful websites that brings idea to real life',
        1000,
        'I desgin  functional websites that brings idea to real life',
        1000
      ]}
      wrapper="span"
      speed={50}
     deletionSpeed={60}

      repeat={Infinity}
    />
        </div>
        <div className='  border-2 border-white/20 rounded-full'>
        <img src="./man.png" className='object-fill rounded-full'></img>
        </div>
    </div>
    )
}