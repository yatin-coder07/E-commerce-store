"use client"

import AddToBasketButton from "@/components/AddToBasketButton";
import { imageUrl } from "@/lib/imageUrl";
import useBasketStore from "@/store/store"
import { useAuth , useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


function BasketPage  () {
    const groupedItems = useBasketStore((state)=> state.getGroupedItems());
    const {isSignedIn} = useAuth();
    const {user} = useUser();
    const router = useRouter();

    const[isClient , setIsClient] = useState(false);
    const[loading , setLoading]=useState();

  useEffect(()=>{
        setIsClient(true);
    },[])
    if(!isClient){
        return null ;
    }


    if(groupedItems.length === 0){
        return(
            <div className="flex flex-col lg:flex-row p-4 gap-4 text-black text-2xl">
            <h1 className="font-bold ">Your Basket</h1>
            <h2>Your Basket is empty</h2>
            </div>
        )
    }
  return (
   
 <div className="flex flex-col lg:flex-row p-4 justify-center items-center gap-4">
    <div className="flex flex-col gap-4 font-semibold text-2xl sm:text-3xl text-black">
          <h1 className="font-bold ">Your Basket</h1> 
    </div>
    
        <div className="mb-30">
            {groupedItems?.map((item)=>(
          <div key={item.product._id}
          className="flex border-2 rounded-lg space-x-30 p-3 items-center justify-between">
           <div className="flex items-center gap-5"
             onClick={()=>router.push(`/product/${item.product.slug?.current}`)}
            
         >  
             <div className="flex gap-6">
            
                <img src={imageUrl(item.product.image).url()}
                alt={item.product.name ?? "Product image"}
                className="sm:w-30 sm:h-30  object-cover"
               />
               <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-[14px]">{item.product.name}</h1>
            <h2 className="border-2 font-bold">${item.product.price}</h2>
           </div>
            
           </div>
         
           
           </div>
           <div>
            <AddToBasketButton product={item.product}/>
           </div>
          </div>

        ))}
        </div>

        <div className="fixed bottom-0 left-0 w-full border-2 p-2 flex ml-2 mr-2 flex-col gap-1 rounded bg-white">
            <h1 className="text-lg">Order Summary</h1>
            <h2 className="flex justify-between font-semibold text-lg
    ">
                <span>Items</span>
                <span>
                    {groupedItems.reduce((total,item)=>total+ item.quantity , 0)}
                </span>
            </h2>
            <h2 className="flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span>
                    ${useBasketStore.getState().getTotalPrice().toFixed(2)}
                </span>
            </h2>
        </div>
    </div>
        
  
  )
}

export default BasketPage