import { useState } from 'react'
// import{ useState } from 'react'
import './login.css'
// import 'App.css'

const LoginRedux = () => {
const [ name, setName] = useState("");
const [ email, setEmail] = useState("");
const [ password, setPassword] = useState("");



  return (

    <div className='login'>
      <form className='login-form'> 
      <h1>Login here</h1><br />
      <input type='name' placeholder='Name' value={name} onChange={(e) =>setName(e.target.value)} /><br />
      <input type='Email' placeholder='Email' value={email} onChange={(e) =>setEmail(e.target.value)}/><br />
      <input type='Password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/><br />
       <br />
       <button className='submit-btn'>Submit</button>
      </form>
    </div>
  )
}

export default LoginRedux
