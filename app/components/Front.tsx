"use client"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"
import Speech from "./Speech"
import { motion } from "framer-motion" ;
import Shape from "./Shape";
import Link from "next/link";


export default function FrontPage() {
  const listVariant = {
    initial: {
      
      opacity: 0,
      scale: 0.8, 
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.5, 
      }
    }
  };

  return (
    <motion.div
    className="h-full"
    initial={{ y: "-200vh" }}
    animate={{ y: "0%" }}
    transition={{ duration: 1 }}
  >
    <div className="h-[calc(100vh-5rem)] dark:text-white  md:py-10 py-6 w-full  flex flex-col md:flex-row  justify-between ">
      {/* Left Section */}
      <div className=" z-50  h-full  flex flex-col  items-center md:items-start gap-4 md:justify-between  px-10 md:px-16">
        <motion.div
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }} 
          className="xl:text-7xl lg:text-6xl md:text-4xl  text-3xl font-semibold "
        >
          Hey There,
          <div>I am Piyush!</div>
        </motion.div>

        <motion.div variants={listVariant} initial="initial" animate="animate" className="flex flex-col items-start gap-3">
          <motion.div variants={listVariant} className="text-xl w-full md:text-start text-center  font-semibold">
            Top Rated Designer
          </motion.div>
          <motion.div variants={listVariant} className="w-56  leading-none text-justify">
            Loream is the best way of success and it definitely works.
          </motion.div>
          <motion.div variants={listVariant} className=" mt-3 flex  w-full   md:justify-start justify-center gap-3">
            <motion.div variants={listVariant}>
              <FaGithub />
            </motion.div>
            <motion.div variants={listVariant}>
              <FaXTwitter />
            </motion.div>
            <motion.div variants={listVariant}>
              <FaLinkedin />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Section */}
      <div className=" hidden md:flex right lg:py-16 md:py-7 z-10  gap-20 flex-col  px-16">
        <div>
      
           
          <Speech />
          

           

          
      
        </div>
        <div className="  flex justify-center relative">
          <motion.svg
           animate={{rotate:360}}
           transition={{duration:8 , ease:"linear" ,repeat:Infinity}}
            viewBox="0 0 300 300"
            className="w-52 h-52 "
          >
            <defs>
              <path 
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="currentColor" className="text-black text-md dark:text-white">
  <textPath xlinkHref="#circlePath">
    Front-end Developer and UI Designer
  </textPath>
</text>
          </motion.svg>
          <Link href="/contact" className="h-12 w-12 dark:bg-white dark:text-black  md:h-14 md:w-14 absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center m-auto text-xs bg-black text-white rounded-full">
       Hire me
       </Link>
        </div>
      </div>

     
  <div className=" absolute  overflow-hidden h-[calc(100vh-5rem)] flex justify-center items-center   lg:h-[calc(100vh-5rem)] w-full bottom-0  top-auto right-0 left-0">
  <div className="absolute  ">

  <Shape/>
    
  </div>
    

    <div className="absolute  md:w-max   w-1/2 left-0 right-0  bottom-0 m-auto  lg:h-[450px] md:h-[360px] h-[330px]">
      
      <img src="./hero.png" className="  h-full  w-full object-cover "/>
    </div>
  </div>

    </div>
    </motion.div>
  );
}
