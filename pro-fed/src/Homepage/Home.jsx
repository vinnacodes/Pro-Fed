import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import "./Home.css";


// this ll be acting as the dashboard also
// this is the Home page our users 

// we ll have the navbar and the the other import stuff,
const Home = (p) => {
    const [username, setUserName] = useState("Vinna");
    const [Desig, setDesig] = useState(" Developer");
    const [userpic, Setuserpic] = useState("src/assets/user1.jpg");


    useEffect(() => {}, [])


    return (




        <div>

            <div className="card">
               

                <h2 id="usernamehead">Welcome Back </h2>  <span><h4>{username}</h4> </span>


                <div id="userimage">
                    <img src={userpic} alt="user pic" height={60} width={80} />

                </div>



                <div className="userdetails">

                    <ul>

                        <li>


                        </li>
                        <li>
                            {Desig}









                        </li>
                    </ul>

                </div>




            </div>







        </div>
        // card ends here
    )
}
export default Home;