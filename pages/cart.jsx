import React, { useContext, useEffect, useState } from 'react'
import Header from './components/Header'
import { CartContext } from './components/CartContext'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import axios from 'axios'


function cart() {
  const {cart,setCart} = useContext(CartContext)
  

  useEffect(()=>{
    
    // if(localstorageCart){
    //     setCart(JSON.parse(localstorageCart))
    // }
    // console.log(cart)
},[])


  const [products,setProducts] = useState([])

    
    useEffect(() => {
      
      if(cart.length >0){
        
        axios.post(`api/cart`, {ids:cart})
       .then(res => {
        console.log(res.data)
         setProducts(res.data)
       })
        
      //   axios.get(`/api/cart`, {ids:cart})
      //  .then(res => {
      //    setProducts(res.data)
      //  })
      }
      
     },[cart])
   
   

  return (
    <div>
        <Header/>

         <div className=' pb-6 px-2 flex mx-auto  mt-3 rounded-2xl items-center justify-center  '>

          <Container>
                <Row >
                  {products?.map((item) => (
                      <Col sm={12} md={6} lg={4} xl={3} key={item._id}>
              
              <div className='flex flex-col items-center justify-evenly  rounded-2xl shadow-lg md:h-96 mb-4 md:mb-0 w-full gap-4 '>
              <Link href={`/product/${item._id}`}>
              <div className='   flex items-center justify-center cursor-pointer pt-6    '>
                <img className=' max-w-xs md:max-w-48 md:max-h-48 object-contain rounded-2xl shadow-lg p-4 ' src={item.images[0]} alt="" />
              </div>
              </Link>
                
              <h5 className='text-center text-2lg truncate w-full px-4 font-bold '>{item.name}</h5>
              

              <div className='flex items-center justify-center gap-4 mb-4 md:mb-0    '>
                <label className='text-center  text-2xl font-bold'>{"£"+item.price}</label>
                <Button className='bg-[#f2f2f2] text-[#000] rounded-2xl shadow-lg p-2'>Add to Cart</Button>
              </div>

                      </div>
                      
                      </Col>
                      ))}
                  
                  
              
              </Row>
            </Container>

    </div> 
        

    </div>
  )
}

export default cart


// export async function getServerSideProps() {
//   const {cart} = useContext(CartContext)
//   await connect()
//   const cartList = []
//   cart.map(item=>{
//     const product = Product.findById(item)
//     cartList.push(product)
//   })
  
  
  
//   return {  
//     props: {
//       product:JSON.parse (JSON.stringify(cartList))}
//   }

// }