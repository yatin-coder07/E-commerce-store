"use client"
import { imageUrl } from '@/lib/imageUrl'
import { AnimatePresence , motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({product}:ProductCardProps) => {
  
  return (
    <>
   <Link href={`/product/${product?._id}`}>
    <AnimatePresence>
      <motion.div 
      layout
      initial={{opacity:0.2}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      className='card-container'
      >
        
       
          {product?.image && (
          <img className='product-card-image '
          src={imageUrl(product.image).url()}/>
        )}
       
        <div className='product-card-title-container flex '><h1 className='product-card-title'>{product?.name.length>20 ? `${product.name.slice(0,20)}...`:product.name }</h1>
        <p className='text-[#494848] text-[15px] font-medium'>{product?.description.length>30 ?
        `${product.description.slice(0,30)}...`:product.description}</p>
        </div>
        <div className="flex justify-start ">
          <button className='font-medium border-2 '>${product?.price}</button>
        </div>
        
      </motion.div>
    </AnimatePresence></Link>
    </>
  )
}

export default ProductCard