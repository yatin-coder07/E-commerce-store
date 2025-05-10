import { Subtitles } from "lucide-react";
import { defineField, defineType } from "sanity";

export const categoryType = defineType( {
    name: 'categoryType',
    title: 'Category type',
    type: 'document',
    fields: [
        defineField({
            name:"title",
            type:"string",
        }),
        defineField({
            name:"slug",
            type:"slug",
            options:{
                source:'title',
            }
        }),
        defineField({
            name:"description",
            type:"text",
        })
        
    ],
    preview:{
        select:{
            title:"title",
            subtitle:"description"
        }
    }
})