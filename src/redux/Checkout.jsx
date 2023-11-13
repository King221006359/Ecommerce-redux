// import React from 'react'
import { useSelector } from "react-redux";
import '../App.css'

export function Checkout(){
    const cartItems = useSelector(state => state.cart.cart)
  return (
    <>
    <div>
      <h2>Checkout</h2>
      {
        cartItems.map(item =>{
            return (
                <>
                <div className='body-container'>
                <div className='wrap'>
                    <h2>Welcome</h2>
                 <img src = {item.image} alt="" className="img" />
                 <h4>{item.title}</h4>
                 <button className="btn">Remove</button>
                    </div>

                    </div> 
                    </>  
            )
        })
      }
      
    </div>
    </>
    
  )
}

export default Checkout
