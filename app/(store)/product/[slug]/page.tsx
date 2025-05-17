import { imageUrl } from "@/lib/imageUrl"
import { getProductById } from "@/sanity/lib/products/getProductBySlug"


const Productpage = async({params}:{params:Promise<{slug:string}>}) => {
    const {slug}=await params
    const product = await getProductById(slug)
     const isOutOfStock = product.stock != null && product.stock <=0
  return (
    <>
    <section className="product-details-container">
       <div>{isOutOfStock && (
        <div className="bg-red-500 text-white font-medium sm:p-4 sm:h-15 sm:text-2xl  sm:w-50 text-center z-1 ">
        Out Of Stock!
        
      </div>               
      )}</div>
      <div className="product-image-container">
        {product?.image && (
                  <img 
                  src={imageUrl(product.image).url()}/>
                )}
       
       
             
      </div>
    </section>
    </>
  )
}

export default Productpage