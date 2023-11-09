import React from 'react'

import pic12 from '../assets/pic9.jpg'
import pic1 from '../assets/pic16.jpg'
import pic2 from '../assets/pic17.jpg'
const Home = () => {
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
        <div className='body-container'>
            <div className='wrap'>
                <img src= {pic12} className='img' /><br/>
                <h>Dress :500$</h>
            </div>
            <div className='wrap'>
                <img src= {pic1} className='img' /><br/>
                <h>Dress :500$</h>
            </div>
            <div className='wrap'>
                <img src= {pic2} className='img' /><br/>
                <h>Dress :500$</h>
            </div>
        </div>

        <div className='Footer'>
            @2023 all right reserved Designed by king
        </div>
      
    </div>
  )
}

export default Home
