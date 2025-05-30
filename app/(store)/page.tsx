

import ProductView from "@/components/ProductView";
import { getAllCategories } from "@/sanity/lib/products/getAllcategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";


export default async function Home () {

  const products = await getAllProducts();
  const categories = await getAllCategories();
  
 





  return (
   <>
 
   <div>
    <ProductView products={products} categories={categories}/>
   </div>
  
   </>
  );
}
