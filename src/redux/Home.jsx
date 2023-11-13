// import React from 'react'

import pic3 from '../assets/pic18.jpg'
import pic1 from '../assets/pic16.jpg'
import pic2 from '../assets/pic4.jpg'
import pic4 from '../assets/picee.jpg'

import Product from './Product'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {

    const cartItems = useSelector(state => state.cart.cart)
    return (
        <div className='container'>
            <div className='navbar'>
                <nav>
                    <ul>
                        <li><a href='/'><strong>E-<i>commerce</i></strong></a></li>
                        {/* <li><a href='/shop'>Shop</a></li>
                    <li><a href='/login'>Login</a></li> */}
                    </ul>
                </nav>
            </div>
            <br />
            <div className='image'>
                <img src={pic4} className='body-img' />
            </div>
            <div className='cart'>
                <h2>Code </h2>
                <Link to="/Checkout"><h4>Cart <small>{cartItems.length}</small></h4></Link>
            </div>
            <div className='body-container'>
                <div className='wrap'>
                    <Product
                        id="1"
                        image={pic2}
                        title="Dress - shoes"

                    />
                </div>
                <br />
                <div className='wrap'>
                    <Product
                        id="2"
                        image={pic3}
                        title="Dress - T-shirts"
                    />

                </div>
                <div className='wrap'>
                    <Product
                        id="3"
                        image={pic1}
                        title="This is T-shirts"
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
