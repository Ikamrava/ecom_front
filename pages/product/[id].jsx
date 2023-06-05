import React from 'react'
import Header from '../components/Header'
import { Product } from '../lib/products'
import { connect } from '../lib/mongoose'
import ProductImages from '../components/ProductImages'


function product({product}) {


  return (
    <div className=' max-w-7xl mx-auto'>
        <Header/>
        <div>
          <h3 className='mt-3 mx-2'>{product.name}</h3>
          <div className='md:flex  mt-5 mx-2'>
              <div className=' '>
                 <ProductImages images={product.images}/>
              </div>
              <div className=' max-w-2xl  mt-5  mx-5'>
                < h3 className='mt-3 mx-2'> Description</h3>
                <p className='mt-3 mx-2'>{product.description}</p>
              </div>
          </div>
        
        <div className=' max-w-2xl  mt-5 border-t-2 border-gray-300 mx-5'>
          < h3 className='mt-3 mx-2'> Configuration</h3>
          {/* <p className='mt-3 mx-2'>{product.properties}</p> */}
        </div>
        </div>
    </div>
  )
}

export default product


export async function getServerSideProps(context) {
  const id = context.params.id

  
  await connect()
  const product = await Product.findById(id)
  
  return {  
    props: {
      product:JSON.parse (JSON.stringify(product))}
  }

}
