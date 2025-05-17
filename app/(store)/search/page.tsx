import ProductCard from '@/components/ProductCard';
import ProductsGrid from '@/components/ProductsGrid';
import { searchProductsByName } from '@/sanity/lib/products/searchProductsByName';
import React from 'react'

const searchPage = async ({searchParams}:{searchParams:{
    query:string;
}}) => {
    const {query} = await  searchParams
    const products = await searchProductsByName(query);
    
    if(!products.length){
      return(
        <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4 gap-4">
          <div className="bg-white rounded-lg shadow-md w-full">
            <h1 className="text-3xl font-bold text-center">
              No Products found for {query}
            </h1>
            <p className="text-gray-600 text-center">Try searching with different keywords</p>
          </div>
        </div>
      )
    }
  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Search Results For {query}
        </h1>
        <ProductsGrid products={products}/>
      </div>
    </div>
  )
}

export default searchPage