import { defineQuery } from "next-sanity"
import { sanityFetch } from "../live";

export const getProductById= async()=>{
    const PRODUCT_BY_ID_QUERY =defineQuery(`*[_type == "product "&&  _id.current == $id][0]`);

    try{
        const product = await sanityFetch({
            query:PRODUCT_BY_ID_QUERY,
            params:{
               id
            }
        });
        return product.data||null;
}catch(error){
    console.error("Error fetching product byId",error);
    return null;
}
}