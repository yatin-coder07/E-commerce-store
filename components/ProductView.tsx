import React from 'react'
import ProductsGrid from './ProductsGrid'

const ProductView = ({products}:ProductViewProps) => {
     
  return (
    <div className='flex flex-col'>{/*categories*/ }
    <div className='w-full sm:w-[200px]'>
      {/*<CategorySelectorComponent categories={categories}/> */}
    </div>
    
    {/*Products*/}
    <div>
        <div>
           <ProductsGrid products={products}/>
        </div>
    </div>
    </div>
  )
}

export default ProductView