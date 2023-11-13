// import React from 'react'

import pic12 from '../assets/pic9.jpg'
import pic1 from '../assets/pic16.jpg'
import pic2 from '../assets/pic17.jpg'
import Product from './Product'
import { useSelector } from 'react-redux'
const Home = () => {
    
  const cartItems = useSelector(state => state.cart.cart)
  return (
    <div className='container'>
        <div className='navbar'>
            <nav>
                <ul>
                    <li><a href='/'>Ecommerce Home</a></li>
                    {/* <li><a href='/shop'>Shop</a></li>
                    <li><a href='/login'>Login</a></li> */}
                </ul>
            </nav>
        </div>
<br />
<div className='cart'>
    <h2>Code </h2>
    <h4>Cart <small>{cartItems.length}</small></h4>
</div>
        <div className='body-container'>
            <div className='wrap'>
                <Product
                 image = {pic12}
                 />
            </div>
            <div className='wrap'>
            <Product
                 image = {pic1}
                 />
            
            </div>
            <div className='wrap'>
            <Product
                 image = {pic2}
                 />
            </div>
        </div>

        <div className='Footer'>
            @2023 all right reserved Designed by king
        </div>
      
    </div>
  )
}

export default Home
