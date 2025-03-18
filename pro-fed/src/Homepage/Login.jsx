import React from "react";

const Login =()=>{

return(


    <>
    
    <div className="logincard">



        <label htmlFor="UserName">User name</label>
        <input type="text" name="username" value={username} id="username" />
        <label htmlFor="Password">Password</label>
        <input type="text" value={password} />
    </div>
    
    </>
)

}
   export default Login;