"use client"
import { useScroll ,motion, useTransform, useInView, useMotionValue} from "framer-motion"
import Link from "next/link";
import { useEffect, useRef, useState } from "react"
import { FaGithub } from "react-icons/fa6";
import { FaGlobeAsia } from "react-icons/fa";

const items = [
    {
      id: 1,
      color: "from-red-200 to-blue-200",
      title: "Memorix",
      desc: "Memorix is a MERN stack-based app for storing important links securely. It features user authentication with login and signup, ensuring easy access and organization.",
      link: "https://piyush-memorix.netlify.app/signin",
      technology:["React","Express","TypeScript","MongoDb","Nodejs","JWT","Recoil","Tailwind CSS"],
      git:"https://github.com/Piyush631/memorix",
      img:"./brainly.PNG"
    },
    {
      id: 2,
      color: "from-blue-200 to-violet-200",
      title: "WanderLust",
      desc: "Wanderlust is a travel platform built with JavaScript for the frontend and Node.js with Express for the backend. It allows users to search and add hotels, similar to Airbnb. Featuring authentication with login and signup, it supports CRUD operations for managing users and hotel listings.",
      img:"./airbnb.png",
      technology:["JavaScript","Express","MongoDb","Nodejs","EJS"],
            link: "https://airbnb-lite.onrender.com/listing",
            git:"https://github.com/Piyush631/Airbnb_lite"
    },
    {
      id: 3,
      color: "from-violet-200 to-purple-200",
      title: "Layers",
      desc: "LayersWebsite is a fully frontend application built with React, TypeScript, and Framer Motion. It features smooth animations and dynamic layering effects for an engaging user experience.",
      img:"./layers.png",
      link: "https://piyush-layers.netlify.app/",
      technology:["TypeScript","React","Framer Motion","Tailwind CSS"],
      git:"https://github.com/Piyush631/Layers"
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Chat Sphere",
      desc: "Developed a real-time chat application using React, TypeScript, and WebRTC for seamless communication. Implemented a modern glass effect UI for an enhanced user experience.",
      img:"./capture.png",
      link: "https://piyush-chatsphere.netlify.app/",
      technology:["TypeScript","WebRtc","React","Framer Motion","Tailwind"],
      git:"https://github.com/Piyush631/chatsphere"
    },
    {
      id: 5,
      color: "from-purple-300 to-red-300",
      title: "Power Fitness",
      desc: "Developed a gym website providing users with knowledge of various exercises through videos, images, and tutorials. Built an engaging and informative platform for fitness enthusiasts.",
      img:"./gym.png",
      link: "https://power-fitness-center.netlify.app/",
      git:"https://github.com/Piyush631/powergym",
      technology:["React","JavaScript","API","Tailwind CSS"],
    },
  ];

export default function Portfolio(){
    const scrollref=useRef<HTMLDivElement>(null)
    const{scrollYProgress} =useScroll({target:scrollref})
    const x=useTransform(scrollYProgress,[0,1],["0%","-80%"])
    const iscardref=useRef<HTMLDivElement>(null)
    const card=useInView(iscardref)
    const [isHover,setIsHover]=useState(false)
    const csize = 50; 

    const Mouseposition = {
      x: useMotionValue(0),
      y: useMotionValue(0),
      
    };
    
    const manageMouseMove = (e: MouseEvent) => {
      Mouseposition.x.set(e.clientX);
      Mouseposition.y.set(e.clientY);
    };
    
    useEffect(() => {
      window.addEventListener("mousemove", manageMouseMove);
      return () => window.removeEventListener("mousemove", manageMouseMove);
    }, );
    



    
    return(
      <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
        <div className="w-full dark:text-white ">
      
        <div className="h-[600vh]  relative  " ref={scrollref}>
          <div className="h-[calc(100vh-5rem)]  font-semibold w-full flex gap-20  flex-col items-center justify-center text-6xl lg:text-7xl">
            <div>My Work</div> 
<div>

<motion.svg
  initial={{ opacity: 0.2, y: 0 }}
  animate={{ opacity: 1, y: "10px" }}
  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  width={50}
  height={50}
  className="stroke-black dark:stroke-white"
>
  <path
    d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
    stroke="currentColor"
    strokeWidth="1"
  ></path>
  <path d="M12 6V14" stroke="currentColor" strokeWidth="1"></path>
  <path
    d="M15 11L12 14L9 11"
    stroke="currentColor"
    strokeWidth="1"
  ></path>
</motion.svg>

</div>
          </div>

        <div className="h-screen dark:bg-neutral-900 sticky top-0  overflow-hidden flex items-center ">
           
          
            <motion.div
         ref={iscardref}
            
            className="flex" style={{x}}>
 <div className="h-screen w-screen flex items-center justify-center   dark:from-neutral-900 dark:to-neutral-900 bg-gradient-to-r from-purple-200 to-red-200"/>

                {items.map(item=>
                
                    <div key={item.id} className={`h-screen   relative overflow-hidden  dark:from-neutral-900 dark:to-neutral-900 w-screen bg-gradient-to-r ${item.color} flex flex-col  gap-4 items-center justify-center`}>
 <motion.div 
 initial={false}
 style={{x:Mouseposition.x , y:Mouseposition.y  ,height:csize ,width:csize}}

 animate={{
  scale:isHover ? 1 : 0
}}
 className=" bg-black text-white absolute top-0  flex justify-center items-center   bottom-0 right-0 -left-10 rounded-full  pointer-events-none z-50">view</motion.div>

                        <div  className=" lg:text-6xl md:text-5xl text-4xl font-medium md:font-semibold dark:text-white text-gray-800">{item.title}</div>
                        <motion.div   
                          
                     
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            onMouseEnter={(e)=> setIsHover(true)}
                            onMouseLeave={(e)=>setIsHover(false)}
                          
                      
                        className="h-52 md:h-56 lg:h-60 cursor-none  w-[300px] md:w-[367px] lg:w-[425px]  ">
                            <a  href={item.link} target="_blank" rel="noopener noreferrer">        <img src={item.img} className="h-full rounded-md  w-full"/> </a>
                        </motion.div>
                        <div className="w-[300px]  md:w-[367px]  lg:w-[425px] ">{item.desc}</div>
                        <div className="w-[300px]  md:w-[367px]  lg:w-[425px] flex flex-wrap gap-2 text-sm ">{item.technology?.map(m=>
                          <div className="flex flex-wrap bg-black text-white px-2 py-1 rounded-md hover:bg-white hover:text-black">{m}</div>
                        )}</div>
                        <div className="w-[300px]  md:w-[367px]  lg:w-[425px]  flex gap-3 justify-end">
                        <a  href={item.git} target="_blank" rel="noopener noreferrer">
                            <button className="text-md  flex gap-1 justify-center items-center cursor-pointer  md:px-4 md:py-3 px-3 py-2 rounded-md bg-white/70 text-black"> <FaGithub />
                          <div> Github</div> </button> </a>
                            <a  href={item.link} target="_blank" rel="noopener noreferrer">      <button className="text-md cursor-pointer flex items-center justify-center gap-1  md:px-4 md:py-3 px-3 py-2 rounded-md bg-white/70 text-black">
                            <FaGlobeAsia />

                            <div>
                              Live</div></button> </a>

                        </div>
                    </div>

                )}
            </motion.div>

        </div>
        </div>
        <div className="h-full w-full overflow-hidden ">

     
        <div className=" flex flex-col dark:bg-neutral-900 bg-white items-center justify-center  ">
            <div className="lg:text-7xl md:text-5xl text-4xl   lg:pt-24 md:pt-28 pt-28 mt-44 lg:mt-0  ">Do you have a project ?</div>
            <div className="relative ">
          <motion.svg
           animate={{rotate:360}}
           transition={{duration:8 , ease:"linear" ,repeat:Infinity}}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]  "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="currentColor" className="text-black dark:text-white">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
       <Link href="/contact" className="h-16 w-16 dark:bg-white dark:text-black   md:h-24 md:w-24 absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center m-auto bg-black text-white rounded-full">
       Hire me
       </Link>
        </div>
        </div>
              
        </div>
        </div>
        </motion.div>
    )
}