'use client'

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs"

import Link from "next/link";
import  { AnimatePresence , motion } from "framer-motion"
import SearchBar from "@/components/SearchBar";
import { PackageIcon, ShoppingBasket } from "lucide-react";

const Navbar = () => {
    const {user} = useUser();
  return (<>
    <section className='Header-container bg-gray-300'>
     <div className="Navbar flex justify-between">
       <div>
        <Link href={"/"}>
        <h1 className="text-lg sm:text-2xl text-shadow-amber-900 font-bold cursor-pointer ml-2 mt-2">ShopEr</h1></Link>
     </div>
     <div className="links">
      <Link href={"/"}>
      <ul>Home</ul>
      </Link>

      <Link href={"/"}>
      <ul>About</ul>
      </Link>

      <Link href={"/"}>
      <ul>Help?</ul>
      </Link>

     
     </div>

     <div className="buttons">
        <Link href={'/basket'}>
        <button className="btns ">
      
        <ShoppingBasket/>
          
        </button>
        </Link>
       
       <ClerkLoaded>
         {user && (
            <Link href={'/Myorders'} className="btns">
                <PackageIcon/>
                

            </Link>
         )}
         {user ? (
            <div className="flex items-center space-x-2 ">
               <UserButton />
                
            </div>
         ):(
            <SignInButton mode="modal">
               <button className="login-btn">Login</button>
            </SignInButton>
         )}

       
       </ClerkLoaded>
       
        
     </div>
     
     </div>
    </section >
    
    <section className=" flex gap-3 p-6 sm:p-0 justify-evenly bg-gray-300 sm:pl-10 sm:pt-8">
      <motion.div className="flex flex-col gap-3"
     >
       <h1 className="text-[22px] sm:text-[35px] md:text-4xl lg:text-5xl font-medium ">Get Latest Products At <br />
       Best Prices</h1>
       <h2 className="text-[10px] sm:text-[15px] lg:text-[18px]">Your one stop to get all your needed cosmetics , electronics , <br />fashion and blogging stuff at best prices</h2>
       <SearchBar/>
      </motion.div>
      <motion.div
       layout
      initial={{opacity:0.2}}
      animate={{opacity:1}}
      transition={{duration:0.3}} className="flex flex-col justify-end">
       <img src={"/headphone.png"} alt="" className="sm:h-100 sm:w-140 lg:w-120"/>
      </motion.div>
      </section></>
  )
}

export default Navbar