'use client'

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs"

import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { PackageIcon, ShoppingBasket } from "lucide-react";

const Navbar = () => {
    const {user} = useUser();
  return (
    <div className='Header-container'>
     <div>
        <Link href={"/"}>
        <h1 className="text-3xl font-bold cursor-pointer ml-2 mt-2">ShopZone</h1></Link>
     </div>
     <div>
        <SearchBar/>
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
  )
}

export default Navbar