import React, { useContext, useEffect, useState } from 'react'
import Header from './components/Header'
import { CartContext } from './components/CartContext'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import axios from 'axios'
import { AiFillPlusCircle } from 'react-icons/ai';
import { IoIosRemoveCircle } from 'react-icons/io';


function cart() {
  const {cart,setCart,addToCart,removeFromCart} = useContext(CartContext)
  


  const [products,setProducts] = useState([])

    
    useEffect(() => {
      if(cart.length > 0){
        
        axios.post(`api/cart`, {ids:cart})
       .then(res => {
        
         setProducts(res.data)
       })
 
      }
      
      
     },[cart])

    function removeHandler(id){
      const newProducts = products.filter((item)=> item._id !== id)
      setProducts(newProducts)
      setCart(newProducts.map(item=>item._id))
      localStorage.setItem('cart',JSON.stringify(newProducts.map(item=>item._id)))
    }

   

                    

      //           <Col key={item._id} className='w-[70%]'>
      //             <div className='flex flex-col items-center justify-evenly  rounded-2xl shadow-lg md:h-96 mb-4 md:mb-0 w-full gap-4 '>
      //             <Link href={`/product/${item._id}`}>
      //               <div className='   flex items-center justify-center cursor-pointer pt-6    '>
      //                 <img className=' max-w-xs md:max-w-48 md:max-h-48 object-contain rounded-2xl shadow-lg p-4 ' src={item.images[0]} alt="" />
      //               </div>
      //             </Link>
                
      //           <h5 className='text-center text-2lg truncate w-full px-4 font-bold '>{item.name}</h5>
      //           <div className='flex  justify-center  gap-4 w-full px-4 '>
      //                <IoIosRemoveCircle size={25} className='cursor-pointer' onClick={()=>removeFromCart(item._id)}>Remove from cart</IoIosRemoveCircle>
      //                  <h5>{cart.filter(id => id === item._id).length}</h5>
      //                <AiFillPlusCircle size={25} className='cursor-pointer' onClick={()=>addToCart(item._id)}>Add to cart</AiFillPlusCircle>
      //           </div>
                   
      //           <div className='flex items-center justify-center gap-4 mb-4 md:mb-0    '>
      //             <label className='text-center  text-2xl font-bold'>{"£"+ (item.price * cart.filter(id => id === item._id).length)}</label>
      //             <Button className='bg-[#f2f2f2] text-[#000] rounded-2xl shadow-lg p-2' onClick={(id)=>removeHandler(item._id)}>Remove</Button>
      //           </div>

      //       </div>
                      
      //     </Col>
      //                 ))}

      //     <Col className=''>
        
      //       <h1>Order Confirmation</h1>
          
      //     </Col>
                  
                  
              
      // </Row>
      //       </Container>



    

   
   

  return (
    <div className='max-w-7xl mx-auto'>
        <Header/>

         <div className=' pb-6 px-2  mx-auto  mt-3  flex   '>
                <table className='max-w-3xl w-full '>
                  <thead className=' border-b-2 border-[#f2f2f2] bg-[#f2f2f2] text-[#000] font-bold p-2'>

                    <tr className=''>
                      <th className='text-left'>Product</th>
                      <th className='text-left'>Quantity</th>
                      <th className='text-center'>Price</th>
                    </tr>
                    
                  </thead>
                    
                    <tbody className='flex flex-col justify-start items-start w-full  '>
                    {products?.map((item) => (
                     
                      <tr key={item._id} className='w-full flex justify-start items-center  border-b-2 border-[#f2f2f2] bg-[#f2f2f2] text-[#000] font-bold p-2 ' >
                        <th>
                        <img className='text-center max-w-[80px]'src={item.images[0]}/>
                        </th>
                        <th className='flex  justify-center  gap-4 w-full px-4'>
                        
                          <IoIosRemoveCircle size={25} className='cursor-pointer' onClick={()=>removeFromCart(item._id)}>Remove from cart</IoIosRemoveCircle>
                              <h5>{cart.filter(id => id === item._id).length}</h5>
                          <AiFillPlusCircle size={25} className='cursor-pointer' onClick={()=>addToCart(item._id)}>Add to cart</AiFillPlusCircle>
                       
                        </th>
                        
                        <th className='text-center'>{item.price}</th>
                      </tr>

                      

                      
                    ))}

                    </tbody>



                </table>

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