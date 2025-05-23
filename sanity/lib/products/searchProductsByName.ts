import { defineQuery } from "next-sanity"
import { sanityFetch } from "../live";

export const searchProductsByName = async(searchParams:string)=>{
    const PRODUCT_SEARCH_QUERY = defineQuery(`*[_type =="product" && name match $searchParams || category match $searchParams] | order(name asc)`);

    try{
        const products = await sanityFetch({
            query: PRODUCT_SEARCH_QUERY,
            params:{
                searchParams:`${searchParams}`,

            }
        })
        return products.data || [];

    } catch(error){
        console.error("error fetching products by name",error);
        return[]
    }
};