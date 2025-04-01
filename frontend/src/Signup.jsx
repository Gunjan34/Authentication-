import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Signup = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange =(e) =>{
    const {name,value} = e.target;
    setFormValues({...formValues,[name]:value});
  }
  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(formValues);
    try{
    const response = await axios.post("http://localhost:8000/api/auth/register-user",formValues);
    console.log(response,'res');

    if(response.data.success){
      toast.success(response.data.message || "Registration Successfull");
      setFormValues({username:"",email:"",password:""});
    }else{
       toast.error(response.data.message || "Registration Failed");
    }
  }catch(error){
      console.error("Error during registration:", error);
      toast.error(error.response.data.error.message || error.message.data.message || "Something went wrong. Please try again later..");
  }
  }
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form onSubmit={handleSubmit}>
          <h2>Sign-Up</h2>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              name="username"
              className="form-control rounded-0"
              value={formValues.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              className="form-control rounded-0"
              value={formValues.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              value={formValues.password}
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-success w-100">Sign Up</button>
          <p></p>
          <Link
            to="/login"
            className="btn btn-default border w-100 text-decoration-none"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
