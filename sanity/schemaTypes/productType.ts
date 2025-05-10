import { defineField, defineType  } from "sanity";

export const productType = defineType( {
    name: 'product',
    title: 'Products',
    type: 'document',
    fields: [
        defineField({
            name:"name",
            title:"Product Name",
            type:"string",
           
        }),
        defineField({
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{
                source:"name",
                maxLength:90,
            }
           
        }),
        defineField({
            name:"image",
            title:"Product Image",
            type:"image",
            options:{
                hotspot:true,
            }
           
        }),
        defineField({
            name:"description",
            title:"Description",
            type:"text",
           
        }),
        defineField({
            name:"price",
            title:"Price",
            type:"number",
           
        }),
        defineField({
            name:"categories",
            title:"Categories",
            type:"array",
            of:[{type:"reference" , to: {type:"categoryType"}}],
           
        }),
        defineField({
            name:"stock",
            title:"Stock",
            type:"number",
           
        }),

    ],
    preview:{
        select:{
            title:"name",
            media:"image",
            price:"price",
            
        },
        prepare(select){
            return{
                title:select.title,
                subtitle:`$${select.price}`,
                media:select.media,
            }
        }
    }
})