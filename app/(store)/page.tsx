
import ImageSlider from "@/components/ImageSlider";
import ProductView from "@/components/ProductView";
import { getAllCategories } from "@/sanity/lib/products/getAllcategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";


export default async function Home () {

  const products = await getAllProducts();
  const categories = await getAllCategories();
  
 



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
   <div>
    <ProductView products={products} categories={categories}/>
   </div>
  
   </>
  );
}
