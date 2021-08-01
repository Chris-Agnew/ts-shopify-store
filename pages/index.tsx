import type { InferStaticPropsType } from "next"
import getAllProducts from '../framework/shopify/getAllProducts'



export async function getStaticProps() {
  const products = await getAllProducts()
  
  return {
    props: {
      products
    }
  }
}


export default function Home({products}: InferStaticPropsType<typeof getStaticProps>) {

  
  
  return (
   <div>
     {products}
   </div>
  )
}
