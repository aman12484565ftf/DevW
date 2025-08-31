import React, { useState } from 'react';
import axios from "axios";
import { useDispatch } from 'react-redux';
import {addUser} from "../utils/userSlice";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "../utils/constants"
const Login = () => { 
    const[emailId,setEmailId]=useState("elon2@mail.com");
    const[password,setPassword]=useState("1232@Aa213");
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
  return (
    <div className='flex justify-center m-10'>
        <div className="card bg-base-300 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Login</h2>
    {/* // Input box */}
    <div >
        <fieldset className="fieldset py-4">
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
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>

  </div>
</div>
</div>
  )
}

export default Login