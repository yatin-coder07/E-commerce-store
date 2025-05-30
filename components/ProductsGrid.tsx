import React from 'react'
import ProductCard from './ProductCard'

const ProductsGrid = ({products}) => {
 
  return (
    <>
    <div className="flex flex-col gap-5 bg-gray-100 p-10">
      <h1 className='text-3xl font-medium'>
        Our Best Selling Products
      </h1>
      <h2>These are our best selling prducts with best prices <br /> delivered within 3 days with no extra delivery charges</h2>
    </div>
    <div className="grid grid-cols-1 pl-20 sm:pl-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  bg-gray-100 p-5 ">
     {products?.map((product)=>{
      return <ProductCard key={product._id} product={product}/>
     })}
   </div></>
   
  )
}

export default ProductsGrid