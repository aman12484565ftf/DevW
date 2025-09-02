import React, { useState } from 'react';
import axios from "axios";
import { useDispatch } from 'react-redux';
import {addUser} from "../utils/userSlice";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "../utils/constants"
const Login = () => { 
    const[emailId,setEmailId]=useState("");
    const[password,setPassword]=useState("");
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[isLoginForm,setIsLoginForm]=useState(true);
    const [error,setError]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleLogin=async()=>{
   try{
    const res=await axios.post(BASE_URL+"/login",
      {
   emailId,
   password,
    },
{withCredentials:true}
);
    console.log("Login successful:",res.data);

    
    dispatch(addUser(res.data));
  return navigate("/");
}
    catch(err){
      setError(err?.response?.data ||"Something went wrong ")
      // console.log(err);
    }
    };


    // Hanled Carefully when a user logs in he goes to /feed but when a user registers he can 
    //Now there is problem with signup while signup we are not sending back the user neither we are setting cookie so go to backend bro!!


    const handleSignUp=async()=>{
   try{
  const res=await axios.post(BASE_URL+"/signup",{
    firstName,
    lastName,
    emailId,
    password
  },{withCredentials:true});
  dispatch(addUser(res.data.data));
  return navigate("/profile");

   }
   catch(err){
    setError(err?.response?.data || "Something went wrong ")
   }
    }

  return (
    <div className='flex justify-center m-10'>
        <div className="card bg-base-300 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center">{isLoginForm?"Login":"SignUp"}</h2>
    {/* // Input box */}
    <div >
        <fieldset className="fieldset py-4">
          {!isLoginForm &&(<> <legend className="fieldset-legend">First Name:{firstName}</legend>
  <input 
  type="text" 
  value={firstName}
  className="input"
  onChange={(e)=>setFirstName(e.target.value)}
  />

    <legend className="fieldset-legend">Last Name:{lastName}</legend>
  <input 
  type="text" 
  value={lastName}
  className="input"
  onChange={(e)=>setLastName(e.target.value)}
  />
  </>)}


  <legend className="fieldset-legend">Email ID:{emailId}</legend>
  <input 
  type="text" 
  value={emailId}
  className="input"
  onChange={(e)=>setEmailId(e.target.value)}
  />
    <legend className="fieldset-legend">Password:{password}</legend>
    <input 
    type="password" 
    value={password}
    className="input"
    onChange={(e)=>setPassword(e.target.value)}
    />
</fieldset>

    </div>
    <p className="text-red-500">{error}</p>
        <div className="card-actions justify-center m-2">
      <button className="btn btn-primary" onClick={isLoginForm?handleLogin:handleSignUp}>
      {isLoginForm?"Login":"Sign Up"}
              </button>
    </div>
    <p className="m-auto cursor-pointer py-2" onClick={()=>setIsLoginForm((value)=>!value)}>
      {isLoginForm?"New User?SignUp here":"Existing User?Login Here"}
      </p>

  </div>
</div>
</div>
  )
}

export default Login