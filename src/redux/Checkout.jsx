// import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import '../App.css'
import { removefromCart } from "./cartSlice";

export function Checkout() {
    const cartItems = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    return (
        <>
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
                {
                    cartItems.map(item => {
                        return (
                            <>
                            
                                <div className='body-container-c'>
                                    <div className='wrap-c'>

                                        <img src={item.image} className='img' /><br />
                                        <h3>{item.title}</h3><br />
                                        <button className="btn"
                                        onClick={() => dispatch(removefromCart({id :item.id}))}
                                        >Remove</button>
                                    </div>

                                </div>
                            </>
                        )
                    })
                }
<div className='Footer'>
            @2023 all right reserved Designed by king
        </div>
            </div>
        </>

    )
}

export default Checkout
