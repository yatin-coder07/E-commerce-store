import { client } from "@/sanity/lib/backendClient";
import { ALL_PRODUCTS_QUERY } from "@/sanity/lib/queries";
import ProductCard from "@/components/ProductCard";
import ImageSlider from "@/components/ImageSlider";


export default async function Home () {

  const products = await client.fetch(ALL_PRODUCTS_QUERY)
  const product = products[0]
  console.log(JSON.stringify(product))



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
    <div className="grid grid-cols-2 md:grid-cols-3">
      <ProductCard product={product}/>
    </div>
   </>
  );
}
