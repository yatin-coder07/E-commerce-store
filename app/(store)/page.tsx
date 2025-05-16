import { client } from "@/sanity/lib/backendClient";
import { ALL_PRODUCTS_QUERY } from "@/sanity/lib/queries";
import ProductCard from "@/components/ProductCard";
import ImageSlider from "@/components/ImageSlider";


export default async function Home () {

  const products = await client.fetch(ALL_PRODUCTS_QUERY)
  
  console.log(JSON.stringify(products))



  const slides = [
  {
    id: '1',
    image: '/sliderImg1.jpeg',
    alt: 'Iphone',
    
  },
  {
    id: '2',
    image: '/sliderImg2.jpeg',
    alt: 'City skyline',
    
  },
  {
    id: '3',
    image: '/sliderImg3.jpeg',
    alt: 'Sales',
   
  },
];

  return (
   <>
   <div className="slider-container p-10">
    <ImageSlider slides={slides}
     interval={3000} 
          showControls 
          showIndicators />
   </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 bg-gray-200 p-9">
     {products?.length > 0 ? (
        products.map((product, index:number)=>(
          <ProductCard key={product._id} product={product}/>
        ))
       ):(<p>No Products Listed yet</p>)}
    </div>
   </>
  );
}
