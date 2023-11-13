// import { useState } from 'react'
// import LoginRedux from './components/LoginRedux'
// import logout from './components/logout'
// import indexRedux from './components/indexRedux'
import Home from './redux/Home'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
// import { BrouserRouter,Routes,Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from

  'react-router-dom';
import Checkout from './redux/Checkout';
function App() {

  return (

    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/Checkout" element={<Checkout />}>Checkout</Route>
        </Routes>
      </BrowserRouter>
    </Provider>


  )
}

export default App
