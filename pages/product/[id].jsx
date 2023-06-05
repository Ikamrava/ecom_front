import React from 'react'
import ProductDetails from '../components/ProductPage'
import {connect} from "../lib/mongoose"
import {Product} from "../lib/products"




function page({product}) {
  return (
    <div>
      <ProductDetails product={product}/>
    </div>
  )
}

export default page


export async function getServerSideProps(context) {
  const id = context.params.id

  
  await connect()
  const product = await Product.findById(id)
  
  return {  
    props: {
      product:JSON.parse (JSON.stringify(product))}
  }

}