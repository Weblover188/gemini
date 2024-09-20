import React from 'react'
import '../Login/Login.css'
import { useState } from 'react'
import { login,signup} from '../../firebase'
import logo from '../../assets/logo.jpg'

const Login = () => {

const [signState, setSignState] = useState("Sign In")
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [loading,setLoading] = useState(false);
const user_auth = async (event)=>{
  event.preventDefault();
  setLoading(true);
  if(signState === "Sign In"){
    await login(email,password);
  }else{
    await signup(name,email,password);
  }
  setLoading(false);
}
  return (
    loading?<>
    </>:
    <div className='login'>
        <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up"?<input value={name} onChange={(e)=>{setName(e.target.value)}} 
          type="text" placeholder='Your Name' />:<></>}
          
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}}
          type="text" placeholder='Email' />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} 
          type="password" placeholder='Password' />
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In"?<p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sing Up Now</span></p>:<p>Already have Account? <span onClick={()=>{setSignState("Sign In")}}>Sing In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
