import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import {toast} from "react-toastify";
const Login =() =>{
  const[email,setEmail] = useState("");
  const[password,setPassword]=useState("");

  const handleSubmit = async(e)=>{
   e.preventDefault();
   console.log(email,password);
   try {
    const response = await axios.post("http://localhost:8000/api/auth/login-user",{email,password:password});
    if(response.data.success){
      toast.success(response.data.message || "Login Successfull");
      console.log(response);
    }else{
      toast.error(response.data.message || "Login Failed");
    }
   } catch (error) {
    console.log("Error during registration", error);
    toast.error(error.response.data.message || "Something went wrong");
   }
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter Email' className='form-control rounded-0' 
                onChange={e=>setEmail(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter Password'  className='form-control rounded-0' 
                onChange={e=>setPassword(e.target.value)}
                />
            </div>
            <button className='btn btn-success w-100' type='submit'>Login</button>
            <p></p>
            <Link to="/signup" className='btn btn-default border w-100 text-decoration-none'>Create Account</Link>
        </form>
      </div>
    </div>
  )
}

export default Login
