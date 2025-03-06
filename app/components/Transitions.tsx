"use client"
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import { AnimatePresence,motion } from "motion/react";


export default function Transitions({children}: { children: React.ReactNode }){
 const pathName=usePathname()
    
 pathName.slice(1)
    return (
        <AnimatePresence mode="wait">
          
        <div 
          key={pathName}
          className="w-full dark:bg-neutral-900 transition-all duration-900 ease-in-out  h-screen bg-gradient-to-b from-blue-100 to-red-100"
        >
          <motion.div
            className="h-full    w-screen fixed bg-black rounded-b-[100px] z-40"
            animate={{ height: "0vh" }}
            exit={{ height: "100vh" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
      
          <motion.div
            className=" fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {pathName.substring(1)}
          </motion.div>
      
          <motion.div
            className="h-screen  w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
            initial={{ height: "100vh" }}
            animate={{ height: "0vh", transition: { delay: 0.2 } }}
          />
      
          <div className="h-20 transition-all duration-900 ease-in-out  dark:bg-neutral-900   " >
            <Navbar  />
  
          </div>
        <div className="  h-[calc(100vh-5rem)] transition-all duration-900 ease-in-out  dark:bg-neutral-900   ">
   
         {children}
   
        </div>
   
      </div>
    
        </AnimatePresence>
    )
}