import { defineQuery } from "next-sanity";

export const ALL_PRODUCTS_QUERY = defineQuery(
    `*[_type=="product"]`
)