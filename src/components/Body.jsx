import Footer from "./Footer"
import Navbar from "./Navbar"
import { Outlet, useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch,useSelector} from "react-redux"
import {addUser} from "../utils/userSlice"
import { useEffect } from "react"
const Body = () => {
  // As soon as application starts it will  just check if the token is valid or not 
  // if valid logs you in otherwise redirect to /login
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const userData=useSelector((store)=>store.user);
//without authencated you cannot go to any page 
  const fetchUser=async()=>{
    if(userData)return;
try{
  const res=await axios.get(BASE_URL+"/profile/view",{
  withCredentials:true,
});
dispatch(addUser(res.data));
}
catch(err){
  //token is not there so now we should navigate to login page user
  // FROM BACKEND AUTH
  if(err.status==401){
//   // if (err.response && err.response.status === 401) {
// console.log("h1"+err);
navigate("/login");
  }
console.error(err);
}
  }

  //only make api call if user is no data present in store 
useEffect(()=>{
fetchUser();
},[])

  return (
    <div>
       <Navbar/>
       <Outlet/>
       <Footer/>
        </div>
  )
}

export default Body