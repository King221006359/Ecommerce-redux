// import React from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import { addtocart } from './cartSlice'
function product ({image,title}) {
  const dispatch = useDispatch()
  return (
    <>
    <div className='body-container'>
    <div className='wrap'>
    <img src= {image} className='img' /> 
    <h3>{title}</h3>
    <br />
    <button className="btn" onClick={() => dispatch(addtocart({image}))}>Add to cart</button>
    </div>
    </div>
    </>
  )
}

export default product
