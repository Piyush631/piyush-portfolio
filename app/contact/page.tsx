
"use client"
import { useRef, useState } from "react";
import Scene from "../components/Scene";
import emailjs from '@emailjs/browser';
import{motion} from 'framer-motion'
export default function Contact() {
    const form = useRef<HTMLFormElement | null>(null);
    const[success,setSuccess]=useState(false)
    const [error,setError]=useState(false)

  const sendEmail = (e:any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVIECE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
      })
      .then(
        () => {
            setSuccess(true)
         form.current?.reset()
        },
        (error) => {
         setError(true)
        }
      );
  };

    return (
        <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className=" h-full flex flex-col items-center justify-center lg:flex-row lg:justify-around px-2 sm:px-4 md:px-8 lg:px-12 xl:px-12">
            <div  className="left  flex justify-center items-center  w-1/2 h-full">
                <div className=" lg:pt-15 pt-1 h-full w-full"><Scene/></div>
            </div>
            <form ref={form} onSubmit={sendEmail} className="dark:bg-neutral-800 dark:text-white right h-2/3 lg:h-full lg:w-[480px]  w-full flex flex-col justify-center  gap-5 p-6 lg:p-8 md:p-6  bg-red-50 rounded-xl ">
               

              
                <div className="text-4xl md:text-5xl lg:hidden">Let's get in Touch</div>
                
                <div className="text-md">Dear Piyush,</div>
       
           <textarea rows={6}  name="user_message" className=" border-b-2 focus:border-black outline-none transition duration-300"/>

        
                
                <div>
                    My mail address is
                </div>
                <input name="user_email" className="py-1.5   border-b-2 focus:border-black outline-none transition duration-300" type="text"/>
                <div>Regards</div>
                <button className="py-2 rounded-md cursor-pointer bg-[#c0afd1] dark:bg-[#a27fc7] font-medium">Send</button>
                <div>
  {success && <div className="text-green-600">Message send successfully</div>}
  {error && <div className="text-red-600">Failed to send message</div>}
</div>

     
        
            </form>
      

            
        </div>
        </motion.div>
    
    
    )
}
