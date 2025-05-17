import { getProductById } from "@/sanity/lib/products/getProductById"


const Productpage = async({params}:{params:Promise<{id:string}>}) => {
    const {id}=await params
    const product = await getProductById(id)
  return (
    <div>page has id : {id}</div>
  )
}

export default Productpage