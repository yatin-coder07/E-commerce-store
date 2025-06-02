import React from 'react'
import ProductsGrid from './ProductsGrid'
import CategorySelectorComponent from './ui/CategorySelectorComponent'

const ProductView = ({products , categories}:ProductViewProps) => {
   console.log(JSON.stringify(categories))
     
  return (
    <div className='flex flex-col'>{/*categories*/ }
    <div className='w-full sm:w-[200px]'>
     <CategorySelectorComponent categories={categories}/> 
    </div>
    
    {/*Products*/}
    hey everyone
    <div>
        <div>
           <ProductsGrid products={products} />
        </div>
    </div>
    </div>
  )
}

export default ProductView