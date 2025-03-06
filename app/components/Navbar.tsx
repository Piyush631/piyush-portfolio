"use client"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Navlinks } from "./NavLinks";
import { motion } from "framer-motion";
import { IoSunny } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";


const nav = [
  {url:"/",title:"Home"},

    {url:"/about",title:"About"},
    {url:"/portfolio",title:"Portfolio"},
    {url:"/contact",title:"Contact"}
]
const links = [
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/piyush068/" },
  { icon: <FaGithub />, href: "https://github.com/Piyush631" },
  { icon: <FaXTwitter />, href: "https://x.com/Piyush8204" },
  { icon: <AiFillInstagram />, href: "https://instagram.com" },

];
const navVariant = {
  closed: {
    x: "100vw",
  },
  opened: {
    x: 0,
    transition: {
      when: "beforeChildren",
      ease:"easeIn",
      staggerChildren: 0.2,
      
    },
  },
};
export default function Navbar() {
    const [open,setOpen]=useState(false)
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
 
      if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark");
        setDarkMode(true);
      }
    }, []);
  
    const toggleDarkMode = () => {
      if (darkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
      setDarkMode(!darkMode);
    };
  return (
    <div className="z-100">


    <div className="   py-3  flex dark:text-white justify-between items-center px-2 sm:px-4 md:px-8 lg:px-12 xl:px-12">
    
      <div className="md:flex w-1/2 hidden gap-4">
      {nav.map((n) => (
        <Navlinks link={n} key={n.title} />
      ))}
      </div>

      <div className="">logo</div>

      <div className="   w-1/3  text-2xl gap-5 justify-end hidden md:flex">
    
        {links.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        ))}
         <div onClick={toggleDarkMode}>
          {
            darkMode ? <IoMoonOutline />:<IoSunny/> 


          }
       

         
         </div>
      </div>
     
    
  
      <div>

      
      {open ? (
        <div
        onClick={() => setOpen(false)}
        className="block md:hidden text-2xl text-white z-100 cursor-pointer"
      >
        <IoClose />
      </div>
      ) : (
        <div
          onClick={() => setOpen(true)}
          className="block md:hidden text-2xl cursor-pointer"
        >
          <IoMenu />
        </div>
      )}
    
</div>
    </div>

    <div>
      

    </div>
    {
            open &&       <motion.div
            variants={navVariant} initial="closed" animate="opened"
            className=" rounded-3xl absolute top-0  z-100  font-medium gap-4  text-white  items-center justify-center left-0 w-screen  flex  flex-col h-screen   bg-black ">
                
                <motion.div variants={navVariant}
        onClick={() => setOpen(false)}
        className="block md:hidden text-4xl absolute top-3 right-3  cursor-pointer"
      >
        <IoClose />
      </motion.div>
                {nav.map((n) => (
                  <motion.div
             variants={navVariant}
                
                  >
   <Navlinks link={n} key={n.title} />
                  </motion.div>
     
      ))}
    
     
            </motion.div>
        
        }
    </div>
  )
}
