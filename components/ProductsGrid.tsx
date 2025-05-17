import React from 'react'
import ProductCard from './ProductCard'

const ProductsGrid = ({products}) => {
  console.log(JSON.stringify(products))
  return (
   <div className="grid grid-cols-1 sm:pl-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  bg-gray-200 p-5">
     {products?.map((product)=>{
      return <ProductCard key={product._id} product={product}/>
     })}
   </div>
  )
}

export default ProductsGrid