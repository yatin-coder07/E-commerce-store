import { defineQuery } from "next-sanity"
import { sanityFetch } from "../live";

export const getAllProducts = async()=>{
    const ALL_PRODUCTS_QUERY = defineQuery(
    `*[_type=="product"]`
);

try{const products = await sanityFetch({
    query:ALL_PRODUCTS_QUERY
});
return products.data || []}catch(error){
    console.error("Error Fetching all products", error);
    return{};
}
}