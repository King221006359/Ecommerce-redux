// import { useState } from 'react'
// import LoginRedux from './components/LoginRedux'
// import logout from './components/logout'
// import indexRedux from './components/indexRedux'
import Home from './redux/Home'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store' 
function App() {

  return (
  
    <Provider store={store}>
    <Home />
    </Provider>
    

  )
}

export default App
