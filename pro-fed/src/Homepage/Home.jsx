import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";



// this ll be acting as the dashboard also
// this is the Home page our users 

// we ll have the navbar and the the other import stuff,
const Home =(p)=>{
const[username,setUserName]=useState("user");
const[Desig,setDesig]=useState("");
useEffect(()=>{},[])


    return(


        <div>

           <div className="card">

           <h1>Welcome Back {username}</h1>
 
 <div className="userdetails">

<ul>

    <li>
name:{username}
        
    </li>
    <li>
      Role:{Desig}  


    </li>
</ul>

 </div>
         



           </div>







        </div>
    )
}
export default Home;