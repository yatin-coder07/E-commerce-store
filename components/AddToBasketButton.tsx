"use client"

import useBasketStore from "@/store/store";
import { useEffect, useState } from "react";

interface AddToBasketProps{
    product:Product;
    disabled:boolean;
}

function AddToBasketButton ({product, disabled}:AddToBasketProps) {
    const {addItems , removeItem , getItemCount}=useBasketStore();
    const itemCount = getItemCount(product._id);

    const[isClient , setIsClient]=useState()

    useEffect(()=>{
        setIsClient(true);
    },[])
    if(!isClient){
        return null ;
    }
  return (
    <div className="flex justify-center items-center">
        <button onClick={()=>addItems(product)} className={`bg-black  cursor-pointer transition transform duration-300 hover:bg-slate-300  hover:text-black h-8 w-20 sm:w-30 sm:h-10 text-white text-[10px] sm:text-[15px]`}>
            Add To Basket
        </button>

        <button className="font-semibold bg-black h-8 w-8 text-[10px] sm:text-[15px] sm:h-10 sm:w-10 text-white ">
            {itemCount}
        </button>
        <button onClick={()=>removeItem(product._id)}
            className={`sm:w-20 sm:h-10 w-20 h-8 text-[10px]  text-white sm:text-[15px] ${
            itemCount === 0 
            ? "bg-gray-500 cursor-not-allowed"
            :"bg-black cursor-pointer transition transform duration-300 hover:bg-slate-300  hover:text-black "
            }`}>
                Remove 
            </button>
    </div>
  )
}

export default AddToBasketButton