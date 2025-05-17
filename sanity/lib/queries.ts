import { defineQuery } from "next-sanity";

export const ALL_PRODUCTS_QUERY = defineQuery(
    `*[_type=="product"]`
)

 export const PRODUCT_SEARCH_QUERY = defineQuery(`*[_type =="product" && name match $searchParams || category match $searchParams] | order(name asc)`);
