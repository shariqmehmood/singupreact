
import userimg from "../images/user.jpg"
import { useState } from "react";


function Signin(){

    const [name ,setname]=useState("");
    const [email ,setemail]=useState("");
    const [password ,setpassword]=useState("");
    const [roll ,setroll]=useState("");

    
    return(
       

            
       <div className="signup-form-div">


         <img className="img" src={userimg} alt=""></img>
               <h1>Sign Up Now</h1>



  <input type="text" className="input-box" onChange={(event)=>{setname(event.target.value,console.log(event.target.value))}} placeholder="Your-Name"></input>
 
  <input type="email" className="input-box" onChange={(event)=>{setemail(event.target.value,console.log(event.target.value))}} placeholder="Your-Email"></input>
 
  <input type="password" className="input-box" onChange={(event)=>{setpassword(event.target.value,console.log(event.target.value))}} placeholder="Your-Password"></input>
  <input type="text" className="input-box" onChange={(event)=>{setroll(event.target.value,console.log(event.target.value))}} placeholder="student/teacher"></input>
  
  <button className="sing-btn">Signup</button>
  
  

  
        
  
        </div>
    )
}
export default Signin;