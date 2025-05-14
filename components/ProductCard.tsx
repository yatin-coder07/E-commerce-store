import React from 'react'

const ProductCard = ({product}:ProductCardProps) => {
  console.log(JSON.stringify(product))
  return (
    <>
    <section className='card-container'>
        <h1>{product?.image}</h1>
    </section>
    </>
  )
}

export default ProductCard