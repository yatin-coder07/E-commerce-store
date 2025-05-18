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
                  src={imageUrl(product.image).url()}
                  className="sm:h-110 h-60 transition transform duration-150 sm:hover:scale-110 md:h-150 lg:w-200 "/>
                )}
       
       
             
      </div>
      <div className=" flex flex-col gap-15">
         <div className="product-details-name ">{product?.name}</div>
      <div className="product-details-price  "><button className="border-2 border-gray-400 p-2">${product.price}</button>
      <div className="product-details-buttons-container   ">
        <button className="product-details-page-button">Buy Now</button>
        <button className="product-details-page-button">Add To Basket</button>
      </div>
      </div>
      <div className="product-details-description text-[#484949]">
       {product?.description}
      </div>
      </div>
     
      
    </section>
    </>
  )
}

export default Productpage